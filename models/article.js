var mongoose = require('mongoose');
var ArticleModel = mongoose.model('Article');

// 获取所有文章
exports.getArticles = function (req, res) {
  return ArticleModel
              .find()
              .exec(function (err,results) {
                if (!results) {
                  console.log('No Article');
                } else {
                  console.log(results);
                }
              });
};

exports.getArticleById = function (req, res) {
  let query = {};
  query.id = req.params.articleId;
  return ArticleModel
              .findOne(query)
              .exec();
};

exports.getArticlebySort = function (req, res) {
  let query = {};
  query.sort = req.params.sort;
  return ArticleModel
              .find(query)
              .exec();
};

exports.createArticle = function (req, res) {
  let article = {};
  article.title = req.body.title;
  article.content = req.body.content;
  article.sort = req.body.sort;
  return ArticleModel.create(article, function (err, doc) {
    if (err) {
      console.log(err);
    } else {
      console.log(doc);
    }
  });
};

exports.getRawArticle = function (req, res, articleId) {
  let query = {};
  query.articleId = articleId;
  return article = ArticleModel
                .findOne(query)
                .exec();
};

exports.editArticle = function (req, res) {
  let id = req.params.articleId;
  let article = {};
  let query = {};
  article.title = req.fields.title;
  article.content = req.fields.content;
  article.sort = req.field.sort;
  query.articleId = id;
  ArticleModel.update(query, {$set: {
    title: article.title,
    content: article.content,
    sort: article.sort
  }}).exec();
};

exports.deleteArticle = function (req, res, articleId) {
  let query = {};
  query.articleId = articleId;
  CommentModel.remove(query).exec();
};