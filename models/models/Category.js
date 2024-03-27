// Category.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Category extends Model {}

Category.init({
  // Define model attributes
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize, // Pass the sequelize connection
  modelName: 'Category', // Set the model name
  timestamps: false // Optionally, disable timestamps
});

module.exports = Category;
