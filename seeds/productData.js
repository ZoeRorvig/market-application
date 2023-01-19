const { Product } = require('../models');

const productData = [
    {
        title: '',
        description: '',
        price: '',
        image: '',
        date_posted: '',
        user_id: 1,      

    },
]

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;