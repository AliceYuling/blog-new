var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: String,
  createdTime: String,
  content: String,
  view: Number
});

var Article = mongoose.model('Article', ArticleSchema);