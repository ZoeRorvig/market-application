const router = require('express').Router();
const { Router } = require('express');
const { Category, User } = require('../../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        const categoryData = await Category.findAll({
            attributes: ['category_name'],
        });

        res.status(200).json(categoryData);

        // const categories = categoryData.map((category) =>
        //     category.get({ plain: true })
        // );
        // res.render('homepage', categories);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/categories/:id', withAuth,async (req, res) => {
    try {
        const categoryData = await Category.findByPk(req.params.id, {
            attributes: ['category_name'],
        });

        res.status(200).json(categoryData);

        const categories = categoryData.map((category) =>
            category.get({ plain: true })
        );
        res.render('homepage', {categories, loggedIn: req.session.loggedIn });
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;