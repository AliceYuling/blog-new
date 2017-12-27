var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  postId: Schema.ObjectId,
  content: String,
  timestamp: Date
});