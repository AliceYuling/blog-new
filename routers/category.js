var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send('category');
});

router.get('/:name', function (req, res, next) {
  res.send（'category item'）;
});

module.exports = router;