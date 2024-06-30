const express = require("express");
const router = express.Router();

const COUNT_LIKES_BY_POST_ID = `
SELECT COUNT(*) AS likes
FROM [post_like]
WHERE post_id = @postId;
`;

const COUNT_LIKES_BY_COMMENT_ID = `
SELECT COUNT(*) AS likes
FROM [comment_like]
WHERE comment_id = @commentId;
`;

const POST_LIKED_BY_USER = `
SELECT COUNT(*) AS liked
FROM [post_like]
WHERE post_id = @postId AND user_id = @userId;
`;

const COMMENT_LIKED_BY_USER = `
SELECT COUNT(*) AS liked
FROM [comment_like]
WHERE comment_id = @commentId AND user_id = @userId;
`;

const LIKE_POST = `
INSERT INTO post_like (post_id, user_id)
VALUES (@postId, @userId);
`;

const LIKE_COMMENT = `
INSERT INTO comment_like (comment_id, user_id)
VALUES (@commentId, @userId);
`;

const UNLIKE_POST = `
DELETE FROM post_like
WHERE post_id = @postId AND user_id = @userId;
`;

const UNLIKE_COMMENT = `
DELETE FROM comment_like
WHERE comment_id = @commentId AND user_id = @userId;
`;

const getLikesByPostId = async (req, res) => {
  try {
    const { postId } = req.body;

    const pool = await db.poolPromise;
    const result = await pool
      .request()
      .input("postId", db.sql.Int, postId)
      .query(COUNT_LIKES_BY_POST_ID);
    console.log(result.recordset);
    res.status(200).json(result.recordset);
  } catch (err) {
    // res.status(200).json(0);
    res.status(500).json({ message: "Error occurred", error: err });
  }
};

const getLikesByCommentId = async (req, res) => {
  try {
    const { commentId } = req.body;

    const pool = await db.poolPromise;
    const result = await pool
      .request()
      .input("commentId", db.sql.Int, commentId)
      .query(COUNT_LIKES_BY_COMMENT_ID);
    res.status(200).json(result.recordset);
  } catch (err) {
    res.status(500).json({ message: "Error occurred", error: err });
  }
};

const postLikedByUser = async (req, res) => {
  try {
    const { postId, userId } = req.body;

    const pool = await db.poolPromise;
    const result = await pool
      .request()
      .input("postId", db.sql.Int, postId)
      .input("userId", db.sql.Int, userId)
      .query(POST_LIKED_BY_USER);
    res.status(200).json(result.recordset);
  } catch (err) {
    res.status(500).json({ message: "Error occurred", error: err });
  }
};

const commentLikedByUser = async (req, res) => {
  try {
    const { commentId, userId } = req.body;

    const pool = await db.poolPromise;
    const result = await pool
      .request()
      .input("commentId", db.sql.Int, commentId)
      .input("userId", db.sql.Int, userId)
      .query(COMMENT_LIKED_BY_USER);
    res.status(200).json(result.recordset);
  } catch (err) {
    res.status(500).json({ message: "Error occurred", error: err });
  }
};

const likePost = async (req, res) => {
  try {
    const { postId, userId } = req.body;

    const pool = await db.poolPromise;
    const result = await pool
      .request()
      .input("postId", db.sql.Int, postId)
      .input("userId", db.sql.Int, userId)
      .query(LIKE_POST);
    res.status(200).json(result.recordset);
  } catch (err) {
    res.status(500).json({ message: "Error occurred", error: err });
  }
};

const likeComment = async (req, res) => {
  try {
    const { commentId, userId } = req.body;

    const pool = await db.poolPromise;
    const result = await pool
      .request()
      .input("commentId", db.sql.Int, commentId)
      .input("userId", db.sql.Int, userId)
      .query(LIKE_COMMENT);
    res.status(200).json(result.recordset);
  } catch (err) {
    res.status(500).json({ message: "Error occurred", error: err });
  }
};

router.get("/post", getLikesByPostId);
router.get("/comment", getLikesByCommentId);
router.get("/post/liked", postLikedByUser);
router.get("/comment/liked", commentLikedByUser);
router.post("/post", likePost);
router.post("/comment", likeComment);

module.exports = router;
