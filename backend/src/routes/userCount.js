const express = require("express");
const db = require("../models/DBContext");

const router = express.Router();

// Set SQL query to count users
const COUNT_USERS_QUERY = "SELECT COUNT(*) AS userCount FROM auth";

// GET user count
router.get("/userCount", async (req, res) => {
  try {
    const pool = await db.poolPromise;
    const result = await pool.request().query(COUNT_USERS_QUERY);
    res.json(result.recordset[0]); // Assuming result.recordset[0] has the count
  } catch (err) {
    res.status(500).json({ message: "Error occurred", error: err });
  }
});

module.exports = router;
