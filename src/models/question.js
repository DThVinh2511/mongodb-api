const {
  default: mongoose
} = require("mongoose");
const mongoose_delete = require('mongoose-delete');

const questionSchema = new mongoose.Schema({
  topicId: String,
  question: String,
  answers: [String],
  correctAnswer: Number
});

questionSchema.plugin(mongoose_delete, {
  overrideMethods: 'all'
});
const Question = mongoose.model('question', questionSchema);

module.exports = Question;