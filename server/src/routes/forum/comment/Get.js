const db = require("../../../models/DBContext");

const SELECT_COMMENTS_BY_POST_ID = `
SELECT comment_id, comment_content, username, comment_updated_time
FROM comment JOIN post ON comment.post_id = post.post_id JOIN [user] ON comment.user_id = [user].user_id
WHERE post.post_id = @id;
`;

const getCommentsByPostId = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await db.poolPromise;
    const result = await pool
      .request()
      .input("id", db.sql.Int, id)
      .query(SELECT_COMMENTS_BY_POST_ID);
    res.status(200).json(result.recordset);
  } catch (err) {
    res.status(500).json({ message: "Error occurred", error: err });
  }
};

module.exports = {
  getCommentsByPostId,
};
