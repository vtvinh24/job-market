const express = require("express");
const db = require("../models/DBContext");

const router = express.Router();

const SELECT_POSTS_CONTENT = "Select p.post_id,p.topic,p.content from post p";

router.get("/", async (req, res) => {
  try {
    const pool = await db.poolPromise;
    const result = await pool.request().query(SELECT_POSTS_CONTENT);
    res.json(result.recordset);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error occurred", error: err });
  }
});

module.exports = router;
