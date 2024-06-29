const Comment = require("./Comment");
const PostLike = require("./PostLike");
const sequelize = require("./SQLize");
const { Model, DataTypes } = require("sequelize");

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
  },
  {
    sequelize,
  }
);

Post.hasMany(Comment);
Comment.belongsTo(Post);

Post.hasMany(PostLike);
PostLike.belongsTo(Post);

module.exports = Post;
