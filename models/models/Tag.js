const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Tag extends Model {}

Tag.init({
  tagName: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Tag',
  timestamps: false
});

module.exports = Tag;
