const express = require("express");
const cors = require("cors");
const config = require("./config/server.json");

const app = express();
const port = 8000;

// CORS rule
app.use(
  cors({
    // origin: config.cors.origin,
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

// Import and define routes
const getPostsRoute = require("./src/routes/posts");
app.use("/api/posts", getPostsRoute);

const getAuthRoute = require("./src/routes/auth");
app.use("/api/auth", getAuthRoute);

const getMarketingRoute = require("./src/routes/marketing");
app.use("/api/marketing", getMarketingRoute);

const getDataPostRoute = require("./src/routes/datapost");
app.use("/api/datapost", getDataPostRoute);



// Start the server
app.listen(port, () => {
  console.log(`(server.js) Server is running on port ${port}`);
});
