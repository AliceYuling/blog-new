var express = require('express');
var router = express.Router();
var ArticleModel = require('../models/article');
router.get('/', function (req, res, next) {
  ArticleModel.getArticles(req, res).then(function (articles) {
    return res.render('admin', {
      articles: articles
    });
  }); 
});

router.get('/article', function (req, res, next) {
  res.send('create article');
});

router.get('/article/create', function (req, res, next) {
  return res.render('create_article');
});

router.post('/article/create', function (req, res, next) {
  ArticleModel.createArticle(req, res).then(function (article) {
    res.redirect('/admin');
  });
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

