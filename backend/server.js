const express = require("express");
const db = require("./src/model/db");
const cors = require("cors");

const app = express();
const port = 8000;

// Queries
// INSERT
const INSERT_POST =
  "INSERT INTO Posts (title, content, author) VALUES (@title, @content, @author)";

// SELECT
const SELECT_POSTS =
  "SELECT Posts.id as id, title, content, username as author, created_timestamp FROM Posts JOIN Users ON Posts.author = Users.id ORDER BY created_timestamp DESC";
const SELECT_POST_BY_ID =
  "SELECT Posts.id as id, title, content, username as author, created_timestamp FROM Posts JOIN Users ON Posts.author = Users.id WHERE Posts.id = @id";

// Define CORS rule
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

// Debug
app.use((req, res, next) => {
  console.log("-------------------------");
  console.log(`Request Method: ${req.method}`);
  console.log(`Request Body: ${JSON.stringify(req.body)}`);
  console.log(`Request Origin: ${req.headers.origin}`);
  console.log(`Request URL: ${req.url}`);
  console.log(`Request Params: ${JSON.stringify(req.params)}`);
  console.log("----");
  console.log("Request Error: ", req.error);
  next();
});

// Define your routes here

app.get("/api/posts/:id", async (req, res) => {
  try {
    const pool = await db.poolPromise;

    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    const result = await pool
      .request()
      .input("id", db.sql.Int, id)
      .query(SELECT_POST_BY_ID);
    console.log(result.recordset);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error occurred", error: err });
  }
});

app.get("/api/posts", async (req, res) => {
  try {
    const pool = await db.poolPromise;
    const result = await pool.request().query(SELECT_POSTS);
    res.json(result.recordset);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error occurred", error: err });
  }
});

app.post("/api/posts", async (req, res) => {
  try {
    const { title, content, author } = req.body;

    const pool = await db.poolPromise;
    const result = await pool
      .request()
      .input("title", db.sql.NVarChar, title)
      .input("content", db.sql.NVarChar, content)
      .input("author", db.sql.Int, author)
      .query(INSERT_POST);
    console.log(1);
    // res.json({ message: "Post inserted successfully" });
    res.status(201).json({ message: "Post inserted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error occurred", error: err });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
