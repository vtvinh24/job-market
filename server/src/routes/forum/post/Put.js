const Post = require("../../../models/Post");

const put = async (req, res) => {
  try {
    const { title, content, author, id } = req.body;

    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and content must not be empty" });
    }
    if (isNaN(author) || author <= 0) {
      return res.status(400).json({ message: "Invalid user id" });
    }
    if (isNaN(id) || id <= 0) {
      return res.status(400).json({ message: "Invalid post id" });
    }

    const post = await Post.findOne({
      where: {
        id: id,
        author: author,
      },
    });

    if (!post) {
      return res.status(404);
    }

    post.title = title;
    post.content = content;

    await post.save();

    res.status(200).send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};

module.exports = {
  put,
};
