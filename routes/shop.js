// useless at the moment
// const path = require('path');
// const rootDir = require('../util/path');
const shopController = require('../controllers/shopController.js');

const express = require('express');
const router = express.Router();

// /shop/ => GET
// default route
router.get('/cart', shopController.cart_Page);

router.get('/checkout', shopController.checkout_Page);

router.get('/orders', shopController.orders_Page);

router.get('/products-list', shopController.productsList_Page);

router.get('/', shopController.shopHome_Page);

exports.routes = router;