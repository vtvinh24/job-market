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
const SELECT_USER_HASH = "SELECT hash FROM Users WHERE username = @username";


//Select Marketing content
const SELECT_MARKETING_CONTENT = "Select m.id,m.topic,m.content from Marketing m";
//Select Post Content
const SELECT_POSTS_CONTENT = "SELECT TOP 3 p.post_id, p.post_title, p.post_content, u.username FROM post p JOIN auth u ON p.user_id = u.user_id";
//Select JobList Content
const SELECT_JOBLIST_CONTENT = `SELECT j.job_id,u.username,j.job_title,j.job_description,j.job_tags,j.job_work_location,j.job_description,jv.job_view,jl.job_log_time
FROM job j
INNER JOIN auth u ON j.user_id = u.user_id  -- Use INNER JOIN for required data
INNER JOIN job_view jv ON j.job_id = jv.job_id
INNER JOIN job_log jl ON j.job_id = jl.job_id
ORDER BY j.job_id;`;

const SELECT_JOBLIST_CONTENT_BY_VIEW=`SELECT j.job_id,u.username,j.job_title,j.job_description,j.job_tags,j.job_work_location,j.job_description,jv.job_view,jl.job_log_time
FROM job j
INNER JOIN auth u ON j.user_id = u.user_id  -- Use INNER JOIN for required data
INNER JOIN job_view jv ON j.job_id = jv.job_id
INNER JOIN job_log jl ON j.job_id = jl.job_id
ORDER BY jv.job_view DESC;`;

const SELECT_JOBLIST_CONTENT_BY_TIME=`SELECT j.job_id,u.username,j.job_title,j.job_description,j.job_tags,j.job_work_location,j.job_description,jv.job_view,jl.job_log_time
FROM job j
INNER JOIN auth u ON j.user_id = u.user_id  -- Use INNER JOIN for required data
INNER JOIN job_view jv ON j.job_id = jv.job_id
INNER JOIN job_log jl ON j.job_id = jl.job_id
ORDER BY jl.job_log_time DESC;`;

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


app.get("/api/auth", (req, res) => {
  try {
    const { username, password } = req.query;

    // Perform authentication logic here
    // ...
    

    // If authentication is successful
    res.json({ authenticated: true, message: "Authentication successful" });

    // If authentication fails
    // res.json({ authenticated: false, message: "Authentication failed" });
  } catch (err) {
    console.log(err);
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


//Select Job list content by default  
app.get("/api/joblist", async (req, res) => {
  try {
    const pool = await db.poolPromise;
    const result = await pool.request().query(SELECT_JOBLIST_CONTENT);
    res.json(result.recordset);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error occurred", error: err });
  }
});

//Select Job list content by view
app.get("/api/joblistbyview", async (req, res) => {
  try {
    const pool = await db.poolPromise;
    const result = await pool.request().query(SELECT_JOBLIST_CONTENT_BY_VIEW);
    res.json(result.recordset);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error occurred", error: err });
  }
});

//Select Job list content by time
app.get("/api/joblistbytime", async (req, res) => {
  try {
    const pool = await db.poolPromise;
    const result = await pool.request().query(SELECT_JOBLIST_CONTENT_BY_TIME);
    res.json(result.recordset);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error occurred", error: err });
  }
});



app.listen(port, () => {
  console.log(`(server.js) Server is running on port ${port}`);
});