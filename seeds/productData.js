const { Product } = require('../models');

const productData = [
    {
        title: 'Comfy Grey Couch!',
        description: 'Grey L-shaped couch. Perfect for you and your family!',
        price: 300.00,
        image: 'https://images.pexels.com/photos/4857784/pexels-photo-4857784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        user_id: 1,      
        category_id: 4,
    },
    {
        title: 'Orange Tent',
        description: 'Orange, 4 person tent. Used twice. Great for you next adventure!',
        price: 50.00,
        image: 'https://images.pexels.com/photos/2582818/pexels-photo-2582818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        user_id: 2,      
        category_id: 1,
    },
    {
        title: 'Red Dog Sweater',
        description: 'Extra-small red dog sweater. Worn once. My dog refuses to wear it and runs away... but yours might like it!',
        price: 5.00,
        image: 'https://images.pexels.com/photos/6607865/pexels-photo-6607865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        user_id: 1,      
        category_id: 6,
    },
    {
        title: 'Kindle',
        description: 'I am switching to audio books. This is good for carrying around a stack of books with you though. A little lighter... a little less clumsy than a stack of books. ',
        price: 50.00,
        image: 'https://images.pexels.com/photos/844734/pexels-photo-844734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        user_id: 4,      
        category_id: 2,
    },
    {
        title: 'Orange-Yellow VW Bus',
        description: 'Selling to buy a really cool kite. Man with the yellow hat love it, so I am sure you will too.',
        price: 1000.00,
        image: 'https://images.pexels.com/photos/2832251/pexels-photo-2832251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        user_id: 3,      
        category_id: 9,
    },
    {
        title: 'Grey Plates',
        description: 'Set of 6 grey plates',
        price: 10.00,
        image: 'https://images.pexels.com/photos/5514789/pexels-photo-5514789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        user_id: 3,      
        category_id: 5,
    },
    {
        title: 'Baseball Equipment',
        description: 'Bought this to start playing baseball. Already onto a new sport. Used twice.',
        price: 50.00,
        image: 'https://images.pexels.com/photos/257970/pexels-photo-257970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        user_id: 1,      
        category_id: 8,
    },
    {
        title: 'Orange Tent',
        description: 'Orange, 4 person tent. Used twice. Great for you next adventure!',
        price: 50.00,
        image: 'https://images.pexels.com/photos/2582818/pexels-photo-2582818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        user_id: 2,      
        category_id: 1,
    },
    {
        title: 'Red Dog Sweater',
        description: 'Extra-small red dog sweater. Worn once. My dog refuses to wear it and runs away... but yours might like it!',
        price: 5.00,
        image: 'https://images.pexels.com/photos/6607865/pexels-photo-6607865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        user_id: 1,      
        category_id: 6,
    },
    {
        title: 'Comfy Grey Couch!',
        description: 'Grey L-shaped couch. Perfect for you and your family!',
        price: 300.00,
        image: 'https://images.pexels.com/photos/4857784/pexels-photo-4857784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        user_id: 1,      
        category_id: 4,
    },
    {
        title: 'Orange Tent',
        description: 'Orange, 4 person tent. Used twice. Great for you next adventure!',
        price: 50.00,
        image: 'https://images.pexels.com/photos/2582818/pexels-photo-2582818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        user_id: 2,      
        category_id: 1,
    },
    {
        title: 'Red Dog Sweater',
        description: 'Extra-small red dog sweater. Worn once. My dog refuses to wear it and runs away... but yours might like it!',
        price: 5.00,
        image: 'https://images.pexels.com/photos/6607865/pexels-photo-6607865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        user_id: 1,      
        category_id: 6,
    },
]

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;