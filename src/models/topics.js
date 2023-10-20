const {
  default: mongoose
} = require("mongoose");
const mongoose_delete = require('mongoose-delete');

const topicSchema = new mongoose.Schema({
  name: String
});

topicSchema.plugin(mongoose_delete, {
  overrideMethods: 'all'
});
const Topic = mongoose.model('topic', topicSchema);

module.exports = Topic;