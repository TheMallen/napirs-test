const path = require("path");
const { loadBinding } = require("@node-rs/helper");

module.exports = loadBinding(
  path.join(__dirname, "native"),
  "swcify",
  "swcify"
);
