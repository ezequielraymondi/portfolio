const path = require("path");
const { loadEnvFile, handleContactRequest } = require(path.join(__dirname, "..", "scripts", "contact-local"));

loadEnvFile();

module.exports = function (app) {
  app.all("/api/contact", (req, res) => {
    handleContactRequest(req, res);
  });
};
