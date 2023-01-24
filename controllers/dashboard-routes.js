const router = require('express').Router();
const { Product, Category, User } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, async (req, res) => {
    const userID = req.session.userId;
    try {
        const productData = await Product.findAll({
            where: { user_id: userID },
            attributes: ['id', 'title', 'description', 'price', 'image', 'created_at', 'user_id', 'category_id'],
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

        const products = productData.map((product) => product.get({ plain: true }));

        res.render('dashboard', {
            products,
            loggedIn: req.session.loggedIn,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try {
        const productData = await Product.findByPk(req.params.id, {
            attributes: ['id', 'title', 'description', 'created_at', 'price', 'image', 'user_id','category_id'],

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
        res.render('product-dashboards', { 
            product, 
            loggedIn: req.session.loggedIn 
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Product.destroy({ where: { id: req.params.id } });
        res.json(postData);
    } catch (err) {
        console.error(err);
        res.json(err);
    }
});

module.exports = router;