const express = require('express');
const product = require('../modules/product');

module.exports = {
  shopRoot_Page: (req, res) => {
    res.render('shop', {
      prods: product.pull(),
      pageTitle: 'Shop',
      path: '/shop/',
    });
  }
};