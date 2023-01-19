const sequelize = require('../config/connection');
const seedProducts = require('./productData');
const seedUser = require('./userData');

const init = async () => {
  await sequelize.sync({ force: true });

  await seedProducts();

  await seedUser();
  process.exit(0);
};

init();
