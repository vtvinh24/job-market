const CryptoJS = require("crypto-js");
const express = require("express");
const db = require("../models/DBContext");
const router = express.Router();

const SQL_CHECK_USERNAME = `
  SELECT * FROM auth
  WHERE username = @username;
`;

const SQL_INSERT_USER = `
  INSERT INTO auth (username, hash)
  VALUES (@username, @hash);
`;

const SQL_SELECT_USER = `
  SELECT user_id, username FROM auth
  WHERE username = @username AND hash = @hash;
`;

const SQL_CHECK_USER_EXIST_BY_USERNAME = ` 
  SELECT username FROM auth
  WHERE username = @username;
`;

const SQL_UPDATE_PASSWORD = ` 
  UPDATE auth set hash = @hash
  WHERE username = @username;
`;
// Login route with 2 params: username and password in the request body
router.post("/login", async (req, res) => {
  // Get params from the request body
  const { username, password } = req.body;
  const hash = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);

  try {
    const pool = await db.poolPromise;
    const checkUserResult = await pool
      .request()
      .input("username", db.sql.NVarChar, username)
      .query(SQL_CHECK_USERNAME);

    if (checkUserResult.recordset.length > 0) {
      const userResult = await pool
        .request()
        .input("username", db.sql.NVarChar, username)
        .input("hash", db.sql.NVarChar, hash)
        .query(SQL_SELECT_USER);

      if (userResult.recordset.length > 0) {
        res.status(200).json(userResult.recordset[0]);
      } else {
        res.status(400).json({ message: "Password does not match" });
      }
    } else {
      res.status(400).json({ message: "Username does not exist" });
    }
  } catch (err) {
    res.status(500).json({ message: "Register failed." });
  }
});

// Register route with 2 params: username and password in the request body
router.post("/register", async (req, res) => {
  // Get params from the request body
  const { username, password } = req.body;
  const hash = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
  try {
    const pool = await db.poolPromise;
    const checkUserResult = await pool
      .request()
      .input("username", db.sql.NVarChar, username)
      .query(SQL_CHECK_USER_EXIST_BY_USERNAME);

    if (checkUserResult.recordset.length > 0) {
      res.status(409).json({ message: "Username already exists" });
    } else {
      await pool
        .request()
        .input("username", db.sql.NVarChar, username)
        .input("hash", db.sql.NVarChar, hash)
        .query(SQL_INSERT_USER);
      res.status(201).json({ message: "User created successfully" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Login failed." });
  }
});

router.post("/valid-username", async (req, res) => {
  const { username } = req.body;
  try {
    const pool = await db.poolPromise;
    const checkUserResult = await pool
      .request()
      .input("username", db.sql.NVarChar, username)
      .query(SQL_CHECK_USERNAME);

    if (checkUserResult.recordset.length > 0) {
      res.status(200).json({ message: "Username exists" });
    } else {
      res.status(409).json({ message: "Username not exists" });
    }
  } catch (e) {
    res.status(500).json({ message: "Username not exists." });
  }
});
router.post("/reset-password", async (req, res) => {
  try {
    const { username, newPassword } = req.body;
    const hash = CryptoJS.SHA256(newPassword).toString(CryptoJS.enc.Hex);
    const pool = await db.poolPromise;
    const checkUserResult = await pool
      .request()
      .input("username", db.sql.NVarChar, username)
      .query(SQL_CHECK_USERNAME);

    if (checkUserResult.recordset.length > 0) {
      const upadtePassword = await pool
        .request()
        .input("username", db.sql.NVarChar, username)
        .input("hash", db.sql.NVarChar, hash)
        .query(SQL_UPDATE_PASSWORD);
      if (upadtePassword) {
        res.status(200).json({ message: "Update pasword successful" });
      } else {
        es.status(409).json({ message: "Update pasword failed" });
      }
    } else {
      res.status(409).json({ message: "Username not exists" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Update failed" });
  }
});

module.exports = router;
