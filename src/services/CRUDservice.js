const connection = require("../config/database");
const User = require("../models/user");

const getAllUsers = async () => {
  const [results, fields] = await connection.query('SELECT * FROM Users');
  return results;
}
const getUserById = async (userId) => {
  const results = User.findById({
    _id: userId
  });
  return results;
}
const updateUser = async (params) => {
  const {
    userId,
    fname,
    email,
    city
  } = params;
  console.log(userId);
  await User.updateOne({
    _id: userId
  }, {
    name: fname,
    email: email,
    city: city
  });
}
const deleteUser = async (userId) => {
  await User.deleteOne({
    _id: userId
  });
}
module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
}