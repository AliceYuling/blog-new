var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send('欢迎管理员登陆');
});

router.get('/article', function (req, res, next) {
  res.send('create article');
});

router.get('/article/create', function (req, res, next) {
  res.send('create article');
});

router.get('/article/edit', function (req, res, next) {
  res.send('edit article');
});

router.get('/user', function (req, res, next) {
  res.send('manage user');
});

router.get('/category', function (req, res, next) {
  res.send('manage category');
});

module.exports = router;

