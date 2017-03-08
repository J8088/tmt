'use strict';

var express = require('express');
var router = express.Router();
var tasks = require('./tasks.controller');


router.get('/', tasks.get);
router.post('/add', tasks.add);
router.post('/update', tasks.update);
router.post('/delete', tasks.delete);

module.exports = router;