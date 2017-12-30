var mongoose = require('mongoose');
var CommentModel = mongoose.model('Comment');

exports.createComment = function (comment) {
  CommentModel
          .create(comment)
          .exec();
};

exports.deleteComment = function (comment) {
  let query = {},
  query.commentId = comment.commentId;
  CommentModel
          .remove(query)
          .exec();
};

exports.getCommentsCount = function (articleId) {
  let query = {};
  query.articleId = articleId;
  return CommentModel
          .count(query)
          .exec();
};