// useless at the moment
// const path = require('path');
// const rootDir = require('../util/path');

const express = require('express');
const products = require('../controllers/adminController').products;
const router = express.Router();

// default route
router.get('/', (req, res) => {
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/shop/',
  });
});

module.exports = router;
