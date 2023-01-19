const sequelize = require('../config/connection');
const seedProducts = require('./productData');
const seedUser = require('./userData');
const seedCategories = require('./categoryData');

const init = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedCategories();

  await seedProducts();

  process.exit(0);
};

init();
