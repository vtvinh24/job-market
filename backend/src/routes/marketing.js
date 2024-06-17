const express = require("express");
const db = require("../models/DBContext");

const router = express.Router();

//Select Marketing content
const SELECT_MARKETING_CONTENT = "Select m.id,m.topic,m.content from Marketing m";

router.get("/", async (req, res) => {
  try {
    const pool = await db.poolPromise;
    const result = await pool.request().query(SELECT_MARKETING_CONTENT);
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ message: "Error occurred", error: err });
  }
});

module.exports = router;
