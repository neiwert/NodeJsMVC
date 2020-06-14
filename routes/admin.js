const express = require('express');
const adminController = require('../controllers/adminController.js');

// useless at the moment
// const path = require('path');
// const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.AddProd_Page);

// /admin/add-product => POST
router.post('/add-product',adminController.AddProd_Mod);

// default route
router.get('/', (req, res) => {
  res.redirect('/admin/add-product');
});

exports.routes = router;