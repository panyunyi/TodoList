'use strict';
var router = require('express').Router();
var AV = require('leanengine');

var Todo = AV.Object.extend('Todo');

// 查询 Todo 列表
router.get('/', function (req, res, next) {
  res.render('index', {
    appId: process.env.LEANCLOUD_APP_ID,
    appKey: process.env.LEANCLOUD_APP_KEY
  });
});



module.exports = router;
