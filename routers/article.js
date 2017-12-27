var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send('article');
  next();
});

router.get('/:articleId', function(req, res, next) {
  res.send('article id');
  next();
});

router.get('/archive', function(req, res, next) {
	res.send('archive');
});

module.exports = router;