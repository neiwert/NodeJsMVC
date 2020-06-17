const express = require('express');
const adminController = require('../controllers/adminController.js');

// useless at the moment
// const path = require('path');
// const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product
router.get('/add-product', adminController.addProd_Page);
router.post('/add-product', adminController.addProd_Mod);

// /admin/edit-products
// router.get('/edit-product ', adminController.editProd_Page);
router.post('/edit-product ', adminController.editProd_Mod);

// /admin/remove-product
router.get('/delete-product ', adminController.delProd_Mod);

// /admin/products
router.get('/list-products', adminController.listProd_Page);

// default route
router.get('/', (req, res) => {
  res.redirect('/admin/add-product');
});

exports.routes = router;