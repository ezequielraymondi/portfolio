const ONE_DAY_SECONDS = 24 * 60 * 60;
const memoryStore = new Map();

function getClientIp(req) {
  const forwardedFor = req.headers["x-forwarded-for"];
  const realIp = req.headers["x-real-ip"];

  if (typeof forwardedFor === "string" && forwardedFor.length > 0) {
    return forwardedFor.split(",")[0].trim();
  }

  if (typeof realIp === "string" && realIp.length > 0) {
    return realIp.trim();
  }

  return req.socket?.remoteAddress || "unknown";
}

const CONTACT_TIMEZONE = process.env.CONTACT_TIMEZONE || "America/Argentina/Buenos_Aires";

function getToday() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: CONTACT_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function getDailyKey(ip) {
  return `contact:${ip}:${getToday()}`;
}

function parseCookies(cookieHeader) {
  if (!cookieHeader) {
    return {};
  }

  return cookieHeader.split(";").reduce((cookies, cookie) => {
    const [name, ...valueParts] = cookie.trim().split("=");

    if (!name) {
      return cookies;
    }

    cookies[name] = decodeURIComponent(valueParts.join("="));
    return cookies;
  }, {});
}

function hasDailyCookie(req) {
  const cookies = parseCookies(req.headers.cookie);
  return cookies.contact_sent_date === getToday();
}

function setDailyCookie(res) {
  const secureFlag = process.env.NODE_ENV === "production" ? "; Secure" : "";

  res.setHeader(
    "Set-Cookie",
    `contact_sent_date=${getToday()}; Max-Age=${ONE_DAY_SECONDS}; Path=/; HttpOnly; SameSite=Lax${secureFlag}`
  );
}

function cleanupMemoryStore() {
  const now = Date.now();

  for (const [key, value] of memoryStore.entries()) {
    if (value.expiresAt <= now) {
      memoryStore.delete(key);
    }
  }
}

function hasKvConfig() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

async function hasReachedDailyLimit(key) {
  if (hasKvConfig()) {
    try {
      const response = await fetch(`${process.env.KV_REST_API_URL}/get/${encodeURIComponent(key)}`, {
        headers: {
          Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
        },
      });

      if (!response.ok) {
        console.warn("contact_kv_get_failed", { status: response.status });
        cleanupMemoryStore();
        return memoryStore.has(key);
      }

      const data = await response.json();
      return Boolean(data.result);
    } catch (error) {
      console.warn("contact_kv_get_error", { message: error.message });
      cleanupMemoryStore();
      return memoryStore.has(key);
    }
  }

  cleanupMemoryStore();
  return memoryStore.has(key);
}

async function markDailyLimit(key) {
  if (hasKvConfig()) {
    try {
      const response = await fetch(`${process.env.KV_REST_API_URL}/set/${encodeURIComponent(key)}/1?EX=${ONE_DAY_SECONDS}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
        },
      });

      if (response.ok) {
        return;
      }

      console.warn("contact_kv_set_failed", { status: response.status });
    } catch (error) {
      console.warn("contact_kv_set_error", { message: error.message });
    }
  }

  memoryStore.set(key, {
    expiresAt: Date.now() + ONE_DAY_SECONDS * 1000,
  });
}

function getEmailJsConfig() {
  return {
    serviceId: process.env.EMAILJS_SERVICE_ID,
    templateId: process.env.EMAILJS_TEMPLATE_ID,
    publicKey: process.env.EMAILJS_PUBLIC_KEY,
    privateKey: process.env.EMAILJS_PRIVATE_KEY,
  };
}

function assertEmailJsConfig() {
  const config = getEmailJsConfig();
  const missing = [];

  if (!config.serviceId) missing.push("EMAILJS_SERVICE_ID");
  if (!config.templateId) missing.push("EMAILJS_TEMPLATE_ID");
  if (!config.publicKey) missing.push("EMAILJS_PUBLIC_KEY");
  if (!config.privateKey) missing.push("EMAILJS_PRIVATE_KEY");

  if (missing.length > 0) {
    const error = new Error(`EmailJS no configurado: faltan ${missing.join(", ")}.`);
    error.code = "EMAILJS_NOT_CONFIGURED";
    throw error;
  }

  return config;
}

async function sendContactEmail(templateParams) {
  const { serviceId, templateId, publicKey, privateKey } = assertEmailJsConfig();

  const payload = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    accessToken: privateKey,
    template_params: templateParams,
  };

  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const responseText = await response.text();
    console.error("contact_emailjs_failed", {
      status: response.status,
      body: responseText.slice(0, 200),
    });

    const error = new Error("EmailJS no pudo enviar el mensaje.");
    error.code = "EMAILJS_SEND_FAILED";
    throw error;
  }
}

function validatePayload(body) {
  const fromName = String(body?.from_name || "").trim();
  const fromEmail = String(body?.from_email || "").trim();
  const message = String(body?.message || "").trim();

  if (!fromName || !fromEmail || !message) {
    return { error: "Completa nombre, email y mensaje." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromEmail)) {
    return { error: "Ingresa un email valido." };
  }

  return {
    value: {
      clientName: fromName,
      from_name: fromName,
      from_email: fromEmail,
      message,
    },
  };
}

module.exports = async function handler(req, res) {
  const method = String(req.method || "").toUpperCase();

  if (method === "OPTIONS") {
    res.setHeader("Allow", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(405).json({ message: "Metodo no permitido." });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const validation = validatePayload(body);

    if (validation.error) {
      return res.status(400).json({ message: validation.error });
    }

    const ip = getClientIp(req);
    const dailyKey = getDailyKey(ip);

    if (hasDailyCookie(req) || (await hasReachedDailyLimit(dailyKey))) {
      console.info("contact_daily_limit_reached", {
        hasKv: hasKvConfig(),
        ip,
      });

      return res.status(429).json({
        code: "DAILY_LIMIT_REACHED",
        message: "Recibimos tu consulta recientemente. Si necesitas agregar algo, podes escribirme por WhatsApp o email.",
      });
    }

    await sendContactEmail(validation.value);
    await markDailyLimit(dailyKey);
    setDailyCookie(res);

    console.info("contact_message_sent", {
      hasKv: hasKvConfig(),
      ip,
    });

    return res.status(200).json({ message: "Mensaje enviado correctamente." });
  } catch (error) {
    console.error("contact_handler_error", { message: error.message, code: error.code });

    if (error.code === "EMAILJS_NOT_CONFIGURED") {
      return res.status(503).json({
        code: "CONFIG_ERROR",
        message: "El formulario no esta configurado. Escribime por email o WhatsApp mientras lo resolvemos.",
      });
    }

    return res.status(500).json({
      message: "No se pudo enviar el mensaje. Proba escribirme por email o WhatsApp.",
    });
  }
};
