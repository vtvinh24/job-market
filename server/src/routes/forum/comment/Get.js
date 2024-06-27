const db = require("../../../models/DBContext");

const SELECT_COMMENTS_BY_POST_ID = `
SELECT comment_id, comment_content, username, comment_updated_time
FROM comment JOIN [user] ON comment.user_id = [user].user_id
WHERE post_id = @id;
`;

const getCommentsById = async (req, res) => {
  try {
    const { id } = req.params;

    const pool = await db.poolPromise;
    const result = await pool
      .request()
      .input("id", db.sql.Int, id)
      .query(SELECT_COMMENTS_BY_POST_ID);

    if (result.recordset.length === 0) {
      res.status(404).json({ message: "Post not found" });
    } else {
      res.json(result.recordset[0]);
    }
  } catch (err) {
    res.status(500).json({ message: "Error occurred", error: err });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
};
