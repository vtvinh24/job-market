const express = require("express");
const db = require("../../model/DBContext");

const router = express.Router();

// Set SQL query to count users
const SELECT_COUNT_USER = "SELECT COUNT(*) AS userCount FROM auth";

// GET user count
router.get("/", async (req, res) => {
  try {
    const pool = await db.poolPromise;
    const result = await pool.request().query(SELECT_COUNT_USER);
    res.json(result.recordset[0].userCount);
  } catch (err) {
    res.status(500).json({ message: "Error occurred", error: err });
  }
});

module.exports = router;
