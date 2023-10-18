const {
  default: mongoose
} = require("mongoose");

const kittySchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
});

const User = mongoose.model('user', kittySchema);

module.exports = User;