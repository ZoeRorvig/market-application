const { Product } = require('../models');

const productData = [
    {
        title: 'Comfy Grey Couch!',
        description: 'Grey L-shaped couch. Perfect for you and your family!',
        price: 300.00,
        image: 'https://images.pexels.com/photos/4857784/pexels-photo-4857784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        date_posted: '1/20/2023',
        user_id: 1,      
        category_id: 4,
    },
    {
        title: 'Orange Tent',
        description: 'Orange, 4 person tent. Used twice. Great for you next adventure!',
        price: 50.00,
        image: 'https://images.pexels.com/photos/2582818/pexels-photo-2582818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        date_posted: '1/20/2023',
        user_id: 2,      
        category_id: 1,
    },
    {
        title: 'Red Dog Sweater',
        description: 'Extra-small red dog sweater. Worn once. My dog refuses to wear it and runs away... but yours might like it!',
        price: 5.00,
        image: 'https://images.pexels.com/photos/6607865/pexels-photo-6607865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        date_posted: '1/19/2023',
        user_id: 1,      
        category_id: 6,
    },
]

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;