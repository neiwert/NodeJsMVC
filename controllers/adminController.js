const express = require('express');
const product = require('../modules/product');

module.exports = {
  AddProd_Page: (req, res) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product'
    });
  },
  AddProd_Mod: (req, res) => {
    product.insert(req.body.title);
    res.redirect('/admin/add-product');
  }
};