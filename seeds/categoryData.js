const { Category } = require('../models');

const categoryData = [
    {
        category_name: '',
        product_id: 1
    }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories