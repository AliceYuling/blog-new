module.exports = function (app) {
  app.get('/', function (req, res) {
  	res.send('welcome');
  });
  app.use('/article', require('./article'));
  app.use('/admin', require('./admin'));
};
