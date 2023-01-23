const router = require('express').Router();
const { Product, User, Category } = require('../models/');

// get all posts for homepage
router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll({
      attributes: ['id', 'title', 'description', 'price', 'image', 'created_at', 'user_id', 'category_id'],
      include: [
        {
          model: User,
          attributes: ['username', 'email'],
        }, {
          model: Category,
          attributes: ['category_name'],
        }
      ],
    });

    // res.status(200).json(productData);

    const products = productData.map((product) => product.get({ plain: true }));
   
    res.render('homepage', {
      products,
      loggedIn: req.session.loggedIn,

    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
