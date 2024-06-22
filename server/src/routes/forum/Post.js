const express = require("express");
const router = express.Router();

// Import route handlers
const { getAllPosts, getPostById } = require("./post/Get");
const { put } = require("./post/Put");
const { deleteById } = require("./post/Delete");
const { post } = require("./post/Post");

// Define routes
router.get("/", getAllPosts); // Route to get all posts
router.get("/:id", getPostById); // Route to get a post by ID
router.put("/:id", put);
router.delete("/:id", deleteById);
router.post("/", post);

module.exports = router;
