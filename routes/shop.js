// useless at the moment
// const path = require('path');
// const rootDir = require('../util/path');
const shopController = require('../controllers/shopController.js');

const express = require('express');
const router = express.Router();

// /shop/ => GET
  // default route
  router.get('/', shopController.shopRoot_Page);

  exports.routes = router;