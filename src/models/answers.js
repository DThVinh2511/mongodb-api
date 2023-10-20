const {
  default: mongoose
} = require("mongoose");
const mongoose_delete = require('mongoose-delete');

const awnserSchema = new mongoose.Schema({
  userId: String,
  topicId: String,
  answers: [{
    questionId: String,
    answer: String
  }],
});

awnserSchema.plugin(mongoose_delete, {
  overrideMethods: 'all'
});
const Awnser = mongoose.model('awnser', awnserSchema);

module.exports = Awnser;