const sequelize = require('../config/connection');
const seedProducts = require('./productData');
const seedUser = require('./userData');
const seedCategories = require('./categoryData');

const init = async () => {
  await sequelize.sync({ force: true });

  await seedProducts();

  await seedUser();

  await seedCategories();
  
  process.exit(0);
};

init();
