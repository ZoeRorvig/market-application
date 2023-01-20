const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const productRoutes = require('./product-routes');
const categoryRoutes = require('./categories-routes');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;
