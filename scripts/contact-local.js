const fs = require("fs");
const path = require("path");

const contactHandler = require("../api/contact");

function loadEnvFile() {
  const envPath = path.join(__dirname, "..", ".env");

  if (!fs.existsSync(envPath)) {
    console.warn("[contact-local] No se encontro .env");
    return;
  }

  for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separator = trimmed.indexOf("=");

    if (separator === -1) {
      continue;
    }

    const key = trimmed.slice(0, separator).trim();
    let value = trimmed.slice(separator + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch (error) {
        reject(error);
      }
    });

    req.on("error", reject);
  });
}

function createResponseAdapter(res) {
  let statusCode = 200;
  const hasExpressStatus = typeof res.status === "function";

  const adapter = {
    setHeader(name, value) {
      res.setHeader(name, value);
    },
    status(code) {
      statusCode = code;
      return adapter;
    },
    json(payload) {
      if (hasExpressStatus) {
        res.status(statusCode).json(payload);
        return;
      }

      if (!res.headersSent) {
        res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
      }

      res.end(JSON.stringify(payload));
    },
    end() {
      if (hasExpressStatus) {
        res.status(statusCode).end();
        return;
      }

      if (!res.headersSent) {
        res.writeHead(statusCode);
      }

      res.end();
    },
  };

  return adapter;
}

async function handleContactRequest(req, res) {
  const method = String(req.method || "").toUpperCase();
  const adapter = createResponseAdapter(res);

  if (method === "OPTIONS") {
    adapter.setHeader("Allow", "POST, OPTIONS");
    adapter.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    adapter.setHeader("Access-Control-Allow-Headers", "Content-Type");
    adapter.status(204).end();
    return;
  }

  try {
    req.method = method;
    req.body = method === "POST" ? await readJsonBody(req) : {};
    await contactHandler(req, adapter);
  } catch (error) {
    console.error("[contact-local] handler error", error);
    adapter.status(500).json({ message: "Error interno del servidor local." });
  }
}

module.exports = {
  loadEnvFile,
  handleContactRequest,
};
