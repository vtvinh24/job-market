const { Sequelize, DataTypes } = require('sequelize');
const db = require('./SQLize');

const Post = db.sequelize.define('Post', {
  // Model attributes are defined here
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
  // Add other attributes as needed
}, {
  // Other model options go here
});

module.exports = Post;