var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: String,
  content: String,
  timestamp: String,
  sort: String,
  pv: Number
});

var Article = mongoose.model('Article', ArticleSchema);