const { Product } = require('../models');

const productData = [
    {
        title: '',
        description: '',
        price: 1,
        image: '',
        date_posted: '1/19/2023',
        user_id: 1,      
        category_id: 1,
    },
]

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;