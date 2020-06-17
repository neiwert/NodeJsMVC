const product = require('../models/product');

const adminNavRoutes = [
  {
    title: 'Shop',
    route: '/shop/'
  },
  {
    title: 'Add Product',
    route: '/admin/add-product'
  },
  {
    title: 'List Products',
    route: '/admin/list-products'
  },
  {
    title: 'Edit Product DEV',
    route: '/admin/edit-product'
  }
];

module.exports.addProd_Page = (req, res) => {
  console.log("add prod page  ");
  console.log(req.body);
  res.render('admin/add-product', {
    nav: adminNavRoutes,
    pageTitle: 'Add Product',
    path: '/admin/add-product'
  });
};
module.exports.addProd_Mod = (req, res) => {
  console.log("add prod mod");
  product.insert({
    title: req.body.title,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
    description: req.body.description
  });
  res.redirect('/admin/add-product');
};

module.exports.listProd_Page = (req, res) => {
  console.log("list prod page");
  console.log(req.body);
  res.render('admin/list-products', {
    prods: product.pull(),
    nav: adminNavRoutes,
    pageTitle: 'List Products',
    path: '/admin/list-products',
  });
};

module.exports.editProd_Page = (req, res) => {
  console.log("edit prod page");
  console.log(req.body);

  res.render('admin/edit-product', {
    item: product.edit.getObj(),
    nav: adminNavRoutes,
    pageTitle: 'Edit Product',
    path: '/admin/edit-product',
  });
};

module.exports.editProd_Mod = (req, res) => {
  console.log("edit prod mod");
  console.log(req.body.prodId);
  res.redirect('/admin/edit-product');
};
module.exports.delProd_Mod = (req, res) => {
  console.log("del prod mod");
  console.log(req.body.prodId);
  res.redirect('/admin/list-products');
};