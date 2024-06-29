const Post = require("../../../models/Post");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).send();
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findByPk(id);

    if (!post) {
      res.status(404).send();
    } else {
      res.json(post);
    }
  } catch (err) {
    res.status(500).send();
  }
};

module.exports = {
  getAllPosts,
  getPostById,
};
