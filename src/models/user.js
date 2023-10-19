const {
  default: mongoose
} = require("mongoose");

const kittySchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  token: String
});

const User = mongoose.model('user', kittySchema);

module.exports = User;