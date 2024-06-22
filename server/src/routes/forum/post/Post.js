const db = require("../../../models/DBContext");

const INSERT_POST = `
INSERT INTO post (post_title, post_content, user_id, post_status) 
VALUES (@post_title, @post_content, @user_id, @post_status);
`;

const INSERT_POST_HISTORY = `
INSERT INTO post_history (post_id, post_title, post_content)
VALUES (@post_id, @post_title, @post_content);
`;

const post = async (req, res) => {
  var inserted, logged;
  try {
    const { title, content, user_id, post_status } = req.body;
    const pool = await db.poolPromise;
    // First query: Insert into post
    const result = await pool
      .request()
      .input("post_title", db.sql.NVarChar, title)
      .input("post_content", db.sql.NVarChar, content)
      .input("user_id", db.sql.Int, user_id)
      .input("post_status", db.sql.NVarChar, post_status)
      .query(INSERT_POST);
    inserted = true;
  } catch (err) {
    inserted = false;
  }

  // Second query: Insert into post_history
  if (!inserted) {
    // INSERT to error log: post cannot be created
    res.status(500).send();
    return;
  } else {
    if (!logged) {
      /* INSERT to error log: post cannot be logged into history*/
    }
    res.status(201).send();
    return;
  }
};

module.exports = {
  post
};
