const express = require('express');
const product = require('../models/product');

const shopNavRoutes = [
  {
    title: 'Admin',
    route: '/admin'
  },
  {
    title: 'Home',
    route: '/shop/home'
  },
  {
    title: 'Cart',
    route: '/shop/cart'
  },
  {
    title: 'Products',
    route: '/shop/products-list'
  },
  {
    title: 'Orders',
    route: '/shop/orders'
  },
  {
    title: 'Checkout',
    route: '/shop/checkout'
  }
];

module.exports.shopHome_Page = (req, res) => {
  res.render('shop/index', {
    prods: product.pull(),
    nav: shopNavRoutes,
    pageTitle: 'Home',
    path: '/shop/home',
  });
};
module.exports.productsList_Page = (req, res) => {
  res.render('shop/products-list', {
    prods: product.pull(),
    nav: shopNavRoutes,
    pageTitle: 'Products List',
    path: '/shop/products-list'
  });
};
module.exports.orders_Page = (req, res) => {
  res.render('shop/orders', {
    nav: shopNavRoutes,
    pageTitle: 'Orders',
    path: '/shop/orders'
  });
};
module.exports.checkout_Page = (req, res) => {
  res.render('shop/checkout', {
    nav: shopNavRoutes,
    pageTitle: 'Checkout',
    path: '/shop/checkout'
  });
};
module.exports.cart_Page = (req, res) => {
  res.render('shop/cart', {
    nav: shopNavRoutes,
    pageTitle: 'Cart',
    path: '/shop/cart'
  });
};