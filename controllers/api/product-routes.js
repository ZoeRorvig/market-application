const router = require('express').Router();
const { Product, User } = require('../../models');

// GET all products

router.get('/', async (req, res) => {
    try {
        const productData = await Product.findAll({
            attributes: ['id', 'title', 'description', 'price', 'image', 'date_posted', 'user_id'],
            include: [{
                model: User,
                attributes: ['username'],
            }],
        });

        res.status(200).json(productData);


        // const products = productData.map((product) =>
        //     product.get({ plain: true })
        // );
        // res.render('homepage', products);


    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET one product

router.get('/products/:id', async (req, res) => {
    try {
        const productData = await Product.findByPk(req.params.id, {
            attributes: ['id', 'title', 'description', 'price', 'image', 'date_posted', 'user_id'],
            include: [{
                model: User,
                attributes: ['username'],
            }],
        });
        
        res.status(200).json(categoryData);
        
        // const product = productData.get({ plain: true });
        // res.render('product', product);
        
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
      date_posted: req.body.date_posted,
      user_id: req.body.user_id,
      category_id: req.body.category_id,
    });
    res.status(200).json(productData)
  } catch (err) {
    res.status(400).json(err);
  }
  });
  
module.exports = router;
