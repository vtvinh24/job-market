const express = require("express");

const router = express.Router();

const SELECT_COMMENTS_BY_POST_ID = `SELECT * FROM comment WHERE post_id = @post_id
ORDER BY comment_id DESC;`;

const INSERT_COMMENT = `INSERT INTO comment (comment_content, user_id, post_id, comment_status)
VALUES (@comment_content, @user_id, @post_id, 'PUBLISHED');`;

const DELETE_COMMENT = `DELETE FROM comment WHERE comment_id = @comment_id AND user_id = @user_id;`;

module.exports = router;
