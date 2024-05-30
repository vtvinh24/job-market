const express = require("express");
const db = require("./src/model/db");
const cors = require("cors");

const app = express();
const port = 8000;

// Queries
// INSERT
const INSERT_POST =
  "INSERT INTO Posts (post_title, post_content, user_id, post_status) VALUES (@post_title, @post_content, @user_id, 'published')";

// SELECT
const SELECT_POSTS_BY_DATE_DESC =
  "SELECT post_id, post_title, post_content, Posts.user_id AS user_id, Users.username AS author, post_created_date FROM Posts JOIN Users ON Posts.user_id = Users.user_id ORDER BY post_created_date DESC";
const SELECT_POST_BY_ID =
  "SELECT post_id, post_title, post_content, Posts.user_id AS user_id, Users.username AS author, post_created_date FROM Posts JOIN Users ON Posts.user_id = Users.user_id WHERE Posts.post_id = @id";

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
    const result = await pool.request().query(SELECT_POSTS_BY_DATE_DESC);
    res.json(result.recordset);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error occurred", error: err });
  }
});

app.post("/api/posts", async (req, res) => {
  try {
    const { title, content, user_id } = req.body;

    const pool = await db.poolPromise;
    const result = await pool
      .request()
      .input("post_title", db.sql.NVarChar, title)
      .input("post_content", db.sql.NVarChar, content)
      .input("user_id", db.sql.Int, user_id)
      .query(INSERT_POST);
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