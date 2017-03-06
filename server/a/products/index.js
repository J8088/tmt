'use strict';

var express = require('express');
var router = express.Router();
var products = require('./products.controller');


router.get('/', products.get);
router.post('/add', products.add);
router.delete('/delete', products.delete);
router.get('/image', products.getImgById);
router.post('/image/add', products.addImg);
router.delete('/image/delete', products.deleteImg);

module.exports = router;