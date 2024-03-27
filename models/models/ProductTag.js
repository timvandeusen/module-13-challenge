const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class ProductTag extends Model {}

ProductTag.init({

}, {
  sequelize,
  modelName: 'ProductTag',
  timestamps: false
});

module.exports = ProductTag;
