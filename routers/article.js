var router = require('express').Router();

router.get('/article', function (req, res, next) {
  res.send('article');
});

module.exports = router;