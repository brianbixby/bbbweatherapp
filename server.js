"use strict";

require("dotenv").config();
const compression = require("compression");
const express = require("express");
const helmet = require("helmet");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

app.use(compression());

app.use(
  helmet.contentSecurityPolicy({
    useDefaults: false,
    directives: {
      "default-src": "'self'",
      "script-src": [
        "'self'",
        "https://fonts.gstatic.com",
        "https://fonts.googleapis.com",
      ],
      "style-src": [
        "'self'",
        "https://fonts.gstatic.com",
        "https://fonts.googleapis.com",
      ],
      "connect-src": [
        "'self'",
        "https://ipapi.co",
        "https://maps.googleapis.com",
        "https://api.openweathermap.org",
      ],
      "font-src": [
        "'self'",
        "https://fonts.gstatic.com",
        "https://fonts.googleapis.com",
      ],
      "img-src": [
        "'self'",
        "https://api.openweathermap.org",
        "http://openweathermap.org",
      ],
      "base-uri": 'none',
    },
  })
);

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
