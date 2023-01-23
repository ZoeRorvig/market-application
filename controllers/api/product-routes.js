const router = require('express').Router();
const { Product, User, Category } = require('../../models');
const withAuth = require('../../utils/auth');


// GET all products

router.get('/', async (req, res) => {
    try {
        const productData = await Product.findAll({
            attributes: ['id', 'title', 'description', 'price', 'image', 'user_id', 'category_id'],
            include: [
                {
                    model: User,
                    attributes: ['username','email'],
                }, {
                    model: Category,
                    attributes: ['category_name'],
                }
            ],
        });

        // res.status(200).json(productData);


        const products = productData.map((product) =>
            product.get({ plain: true })
        );
        res.render('homepage', { 
            products,
            loggedIn: req.session.loggedIn,
        });


    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET one product

router.get('/:id', async (req, res) => {
    try {
        const productData = await Product.findByPk(req.params.id, {
            attributes: ['id', 'title', 'description', 'price', 'image', 'user_id','category_id'],

            include: [
                {
                    model: User,
                    attributes: ['username','email'],
                }, {
                    model: Category,
                    attributes: ['category_name'],
                }
            ],
        });

        // res.status(200).json(categoryData);

        const product = productData.get({ plain: true });
        res.render('product', { 
            product, 
            loggedIn: req.session.loggedIn 
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Post new product

router.post('/', async (req, res) => {
    try {
        const productData = await Product.create({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
            date_posted: req.body.created_at,
            // email: req.session.email,
            user_id: req.session.userId,
            category_id: req.body.category_id,
        });
        res.status(200).json(productData)
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
