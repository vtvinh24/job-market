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

//Select Marketing content
const SELECT_MARKETING_CONTENT = "Select m.id,m.topic,m.content from Marketing m";
//Select Post Content
const SELECT_POSTS_CONTENT = "Select p.post_id,p.topic,p.content from post p";

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
    const { id } = req.params;

    const pool = await db.poolPromise;
    const result = await pool
      .request()
      .input("id", db.sql.Int, id)
      .query(SELECT_POST_BY_ID);

    if (result.recordset.length === 0) {
      res.status(404).json({ message: "Post not found" });
    } else {
      res.json(result.recordset[0]);
    }
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
    // res.json({ message: "Post inserted successfully" });
    res.status(201).json({ message: "Post inserted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error occurred", error: err });
  }
});




//Select Marketing content
app.get("/api/marketing", async (req, res) => {
  try {
    const pool = await db.poolPromise;
    const result = await pool.request().query(SELECT_MARKETING_CONTENT);
    res.json(result.recordset);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error occurred", error: err });
  }
});

//Select Post content
app.get("/api/datapost", async (req, res) => {
  try {
    const pool = await db.poolPromise;
    const result = await pool.request().query(SELECT_POSTS_CONTENT);
    res.json(result.recordset);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error occurred", error: err });
  }
});



app.listen(port, () => {
  console.log(`(server.js) Server is running on port ${port}`);
});