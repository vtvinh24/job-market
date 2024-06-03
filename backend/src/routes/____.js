// This is a template for creating a new route.
const express = require("express");
const db = require("../models/DBContext");

const router = express.Router();

// Set SQL queries here
const QUERY = "SELECT ...";

// Set GET/POST methods here
router.get("/", async (req, res) => {}); // Route without parameter
router.get("/:param", async (req, res) => {}); // Route with parameter

router.post("/", async (req, res) => {});

module.exports = router;
