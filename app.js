const express = require("express");
const { I18n } = require("i18n");
const path = require("path");

const host = "localhost";
const port = 3000;

const app = express();

const i18n = new I18n({
  locales: ["en", "gu", "hi"],
  defaultLocale: ["en"],
  directory: path.join(__dirname, "translation"),
});

app.use(i18n.init);

app.get("/", (req, res) => {
  res.send(res.__("message"));
});

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
