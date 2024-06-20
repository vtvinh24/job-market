const express = require("express");
const db = require("../models/DBContext");

const router = express.Router();

const SELECT_RECENT_POSTS = `
SELECT post_id, post_title, post_content, username, post_updated_time
FROM post JOIN auth ON post.user_id = auth.user_id
ORDER BY post_updated_time DESC;
`;

const SELECT_POST_BY_ID = `
SELECT post_id, post_title, post_content, username, post_updated_time
FROM post JOIN auth ON post.user_id = auth.user_id
WHERE post_id = @id
ORDER BY post_id DESC;
`;

const INSERT_POST = `
INSERT INTO post (post_title, post_content, user_id, post_status) 
VALUES (@post_title, @post_content, @user_id, @post_status);
`;

const INSERT_POST_HISTORY = `
INSERT INTO post_history (post_id, post_title, post_content)
VALUES (@post_id, @post_title, @post_content);
`;

const DELETE_POST = `DELETE FROM post WHERE post_id = @post_id;`;

const SELECT_COMMENTS_BY_POST_ID = `SELECT * FROM comment WHERE post_id = @post_id
ORDER BY comment_id DESC;`;

const INSERT_COMMENT = `INSERT INTO comment (comment_content, user_id, post_id, comment_status)
VALUES (@comment_content, @user_id, @post_id, 'PUBLISHED');`;

const DELETE_COMMENT = `DELETE FROM comment WHERE comment_id = @comment_id AND user_id = @user_id;`;

const UPDATE_POST = `
UPDATE post 
SET post_title = @post_title, post_content = @post_content
WHERE post_id = @post_id AND user_id = @user_id;
`;

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const pool = await db.poolPromise;
    const result = await pool
      .request()
      .input("id", db.sql.Int, id)
      .query(SELECT_POST_BY_ID);

    if (result.recordset.length == 0) {
      res.status(404).json({ message: "Post not found" });
    } else {
      res.json(result.recordset[0]);
    }
  } catch (err) {
    res.status(500).json({ message: "Error occurred", error: err });
  }
});

router.get("/", async (req, res) => {
  try {
    const pool = await db.poolPromise;
    const result = await pool.request().query(SELECT_RECENT_POSTS);
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ message: "Error occurred", error: err });
  }
});

router.post("/", async (req, res) => {
  var inserted, logged;
  try {
    const { title, content, user_id, post_status } = req.body;
    const pool = await db.poolPromise;
    // First query: Insert into post
    const result = await pool
      .request()
      .input("post_title", db.sql.NVarChar, title)
      .input("post_content", db.sql.NVarChar, content)
      .input("user_id", db.sql.Int, user_id)
      .input("post_status", db.sql.NVarChar, post_status)
      .query(INSERT_POST);
    inserted = true;
  } catch (err) {
    inserted = false;
  }

  // Second query: Insert into post_history

  if (!inserted) {
    // INSERT to error log: post cannot be created
    res.status(500).send();
    return;
  } else {
    if (!logged) {
      /* INSERT to error log: post cannot be logged into history*/
    }
    res.status(201).send();
    return;
  }
});

router.put("/update", async (req, res) => {
  try {
    const { title, content, user_id, post_id } = req.body;

    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and content must not be empty" });
    }
    if (isNaN(user_id) || user_id <= 0) {
      return res.status(400).json({ message: "Invalid user id" });
    }
    if (isNaN(post_id) || post_id <= 0) {
      return res.status(400).json({ message: "Invalid post id" });
    }

    const pool = await db.poolPromise;
    const result = await pool
      .request()
      .input("post_id", db.sql.Int, post_id)
      .input("user_id", db.sql.Int, user_id)
      .input("post_title", db.sql.NVarChar, title)
      .input("post_content", db.sql.NVarChar, content)
      .query(UPDATE_POST);

    if (result.rowsAffected[0] === 0) {
      return res.status(404).send();
    } else {
      return res.status(200).send();
    }
  } catch (err) {
    return res.status(500).send();
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const { post_id } = req.body;
    const pool = await db.poolPromise;
    const result = await pool
      .request()
      .input("post_id", db.sql.Int, post_id)
      .query(DELETE_POST);
    if (result.rowsAffected[0] === 0) {
      res.status(404).send();
    } else {
      res.status(200).send();
    }
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
