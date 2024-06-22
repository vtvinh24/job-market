const db = require("../../../models/DBContext");

const UPDATE_POST = `
UPDATE post 
SET post_title = @post_title, post_content = @post_content
WHERE post_id = @post_id AND user_id = @user_id;
`;

const put = async (req, res) => {
  try {
    const { title, content, user_id, post_id } = req.body;

    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and content must not be empty" });
    }
    if (isNaN(user_id) || user_id <= 0) {
      return res.status(400).json({ message: "Invalid user id" });
    }
    if (isNaN(post_id) || post_id <= 0) {
      return res.status(400).json({ message: "Invalid post id" });
    }

    const pool = await db.poolPromise;
    const result = await pool
      .request()
      .input("post_id", db.sql.Int, post_id)
      .input("user_id", db.sql.Int, user_id)
      .input("post_title", db.sql.NVarChar, title)
      .input("post_content", db.sql.NVarChar, content)
      .query(UPDATE_POST);

    if (result.rowsAffected[0] === 0) {
      return res.status(404).send();
    } else {
      return res.status(200).send();
    }
  } catch (err) {
    return res.status(500).send();
  }
};

module.exports = {
  put,
};
