const http = require("http");
const { loadEnvFile, handleContactRequest } = require("./contact-local");

loadEnvFile();

const PORT = Number(process.env.CONTACT_API_PORT || 3001);

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname !== "/api/contact") {
    res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ message: "Ruta no encontrada." }));
    return;
  }

  await handleContactRequest(req, res);
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`[dev-api] El puerto ${PORT} ya esta en uso. Cerra el proceso anterior o cambia CONTACT_API_PORT en .env.`);
    process.exit(1);
  }

  throw error;
});

server.listen(PORT, () => {
  console.log(`[dev-api] API de contacto en http://localhost:${PORT}/api/contact`);
});
