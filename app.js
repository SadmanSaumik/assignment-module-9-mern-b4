const express = require("express");
const helmet = require("helmet");
const hpp = require("hpp");
const cors = require("cors");
const expressMongoSanitize = require("express-mongo-sanitize");
const expressRateLimit = require("express-rate-limit");
const router = require("./src/Routes/api");
const app = express();

// Middleware for security
app.use(helmet());
app.use(hpp());
app.use(cors());
app.use(expressMongoSanitize());
app.use(expressRateLimit());

app.use("/api", router);

app.use((req, res) => {
  res.status(404).json({ status: "error", message: "Route not found" });
});

module.exports = app;
