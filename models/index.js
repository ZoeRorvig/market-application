const User = require('./User');
const Product = require('./Product');

User.hasMany(Product, {
  foreignKey: 'user_id'
});

Product.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Product };
