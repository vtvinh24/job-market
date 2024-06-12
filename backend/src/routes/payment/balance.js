const express = require("express");
const db = require("../../models/DBContext");

const router = express.Router();

// Set SQL query to count users
const SELECT_USER_BALANCE =
  "SELECT balance FROM user_balance WHERE user_id = @user_id";

// GET user count
router.get("/", async (req, res) => {
  try {
    const pool = await db.poolPromise;
    const result = await pool
      .request()
      .input("user_id", db.sql.Int, req.body.user_id)
      .query(SELECT_USER_BALANCE);
    res.json(result.recordset[0].balance);
  } catch (err) {
    res.status(500).json({ message: "Error occurred", error: err });
    console.log(req);
    console.log(err);
  }
});

module.exports = router;
