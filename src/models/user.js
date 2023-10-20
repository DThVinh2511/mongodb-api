const {
  default: mongoose
} = require("mongoose");
const mongoose_delete = require('mongoose-delete');

const kittySchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  token: String
});

kittySchema.plugin(mongoose_delete, {
  overrideMethods: 'all'
});
const User = mongoose.model('user', kittySchema);

module.exports = User;