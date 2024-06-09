const express = require("express");
const db = require("../models/DBContext");

const router = express.Router();

const SELECT_POSTS_BY_ID_DESC = `
  SELECT post_id, post_title, post_content, username FROM post JOIN auth ON post.user_id = auth.user_id
  WHERE post_status = 'PUBLISHED'
  ORDER BY post_id DESC;
  `;
const SELECT_POST_BY_ID = `
  SELECT post_id, post_title, post_content, username FROM post JOIN auth ON post.user_id = auth.user_id
  WHERE post_status = 'PUBLISHED' AND post_id = @id
  ORDER BY post_id DESC;`;
const INSERT_POST =
  "INSERT INTO post (post_title, post_content, user_id, post_status) VALUES (@post_title, @post_content, @user_id, 'PUBLISHED')";

const UPDATE_POST = `
  UPDATE post SET post_title = @post_title, post_content = @post_content
  WHERE post_id = @post_id;
  `;

router.get("/:id", async (req, res) => {
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
    res.status(500).json({ message: "Error occurred", error: err });
  }
});

router.get("/", async (req, res) => {
  try {
    const pool = await db.poolPromise;
    const result = await pool.request().query(SELECT_POSTS_BY_ID_DESC);
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ message: "Error occurred", error: err });
  }
});

router.post("/", async (req, res) => {
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

router.put("/update/:id", async (req, res) => {
  try {
    const { title, content, user_id } = req.body;
    if (!title || !content) {
      res.status(400).json({ message: "Title and content must not be empty" });
      return;
    }
    const pool = await db.poolPromise;
    const result = await pool
      .request()
      .input("post_title", db.sql.NVarChar, title)
      .input("post_content", db.sql.NVarChar, content)
      .query(UPDATE_POST);
    res.status(201).json({ message: "Post updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error occurred", error: err });
  }
});

module.exports = router;
