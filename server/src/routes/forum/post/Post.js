const Post = require("../../../models/Post");

const post = async (req, res) => {
  try {
    const { title, content, author } = req.body;

    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and content must not be empty" });
    }
    if (isNaN(author) || author <= 0) {
      return res.status(400).json({ message: "Invalid user id" });
    }

    const newPost = await Post.create({
      title,
      content,
      author,
    });
    console.log(123)
    res.status(201).json(newPost);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};

module.exports = {
  post,
};
