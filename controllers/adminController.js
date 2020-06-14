const express = require('express');
const router = express.Router();
const products = [];

module.exports = {
  products: products,

  AddProd_Page: (req, res) => {
    res.render('add-product', {
      pageTitle: 'Add Product', path: '/admin/add-product'
    });
  },
  AddProd_Mod: (req, res) => {
    products.push({
      title: req.body.title
    });
    res.redirect('/admin/add-product');
  }
};