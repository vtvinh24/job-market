const express = require("express");
const cors = require("cors");
const config = require("./config/server.json");
const sql = require("mssql");


const app = express();
const port = 8000;

// CORS rule
app.use(
  cors({
    // origin: config.cors.origin,
    origin: "http://localhost:5173",
  })
);

sql
  .connect({
    user: "sa",
    password: "ducminh2306",
    server: "localhost",
    database: "mJOB",
    encrypt: false,
  })
  .then(() => {
    console.log("Connected to SQL Server");
  })
  .catch((err) => {
    console.error("SQL connection error:", err);
  });

app.use(express.json());

// Import and define routes
const postsRoute = require("./src/routes/posts");
app.use("/api/posts", postsRoute);

const authRoute = require("./src/routes/auth");
app.use("/api/auth", authRoute);

const marketingRoute = require("./src/routes/marketing");
app.use("/api/marketing", marketingRoute);

const dataPostRoute = require("./src/routes/datapost");
app.use("/api/datapost", dataPostRoute);

const ticketRoute = require("./src/routes/ticket");
app.use("/api/ticket", ticketRoute);

const countTotalUserRoute = require("./src/routes/dashboard/countTotalUser");
app.use("/api/dashboard/count/user/total", countTotalUserRoute);

const countActiveUserRoute = require("./src/routes/dashboard/countActiveUser");
app.use("/api/dashboard/count/user/active", countTotalUserRoute);

// TEMPLATE FOR ADDING ROUTES
// const ____Route = require("./src/routes/____");
// app.use("/api/____", ____Route);

// Remember to implement the route in the ____Route.js file

// Start the server
app.listen(port, () => {
  console.log(`(server.js) Server is running on port ${port}`);
});