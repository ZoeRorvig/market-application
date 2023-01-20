const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Outdoors', //1
    },
    {
        category_name: 'Technology', //2
    },
    {
        category_name: 'Clothing', //3
    },
    {
        category_name: 'Furniture', //4
    },
    {
        category_name: 'Home Goods', //5
    },
    {
        category_name: 'Pets', //6
    },
    {
        category_name: 'Travel', //7
    },
    {
        category_name: 'Sports', //8
    },
    {
        category_name: 'Vehicles', //9
    }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories