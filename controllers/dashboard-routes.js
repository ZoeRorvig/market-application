const router = require('express').Router();
const { Product, Category, User } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, async (req, res) => {
    const userID = req.session.userId;
    try {
        const productData = await Product.findAll({
            where: { user_id: userId },
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

        // res.status(200).json(productData);

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

module.exports = router;