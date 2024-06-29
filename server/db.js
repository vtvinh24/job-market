const express = require("express");
const cors = require("cors");
const db = require('./src/models/SQLize');
const config = require("./config.json");
const rateLimit = require("express-rate-limit");

const app = express();

// CORS rule
app.use(cors({
  origin: config.middleware.cors.origin
}));

// Rate limiter
app.use(rateLimit({
  windowMs: config.middleware.rateLimiter.windowMs,
  max: config.middleware.rateLimiter.max
}));

app.use(express.json());

const forumRoute = require("./src/routes/Forum");
app.use("/api/forum", forumRoute);

const authRoute = require("./src/routes/Auth");
app.use("/api/auth", authRoute);

// Start the server, if port is already in use, try the next port
var port = config.boot.port;
app.listen(port, () => {
  console.log(`(server.js) Server is running on port ${port}`);
}).on('error', (err) => {
  const maxTries = config.boot.maxBootRetries;
  if (err.code === 'EADDRINUSE') {
    console.log(`(server.js) Port ${port} is already in use. Trying the next port...`);
    port++;
    app.listen(port, () => {
      console.log(`(server.js) Server is running on port ${port}`);
    });
  } else {
    console.error(`(server.js) Failed to start server: ${err}`);
  }
});