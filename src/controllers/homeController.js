const connection = require('../config/database');
const User = require('../models/user');
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../services/CRUDservice');

const getHomePage = async (req, res) => {
  const results = await User.find({});
  res.render('home.ejs', {
    listUsers: results
  });
}

const getABC = (req, res) => {
  // res.send('Hello World!')
  res.render('sample.ejs');
}
const getCreateUsers = async (req, res) => {
  console.log(">>> check users", req.body);
  let {
    fname,
    email,
    city
  } = req.body;
  await User.create({
    name: fname,
    email: email,
    city: city
  })
  res.redirect('/')
}
const getCreatePage = (req, res) => {
  res.render('create.ejs');
}
const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  const results = await getUserById(userId);
  console.log(results);
  res.render('edit.ejs', {
    user: results
  });
}
const updateUsers = async (req, res) => {
  const params = req.body;
  console.log(params);
  await updateUser(params);
  res.redirect('/');
}
const getDeletePage = async (req, res) => {
  const userId = req.params.id;
  const results = await getUserById(userId);
  res.render('delete.ejs', {
    user: results
  });
}
const hanldeDelete = async (req, res) => {
  console.log(req.body);
  const userId = req.body.userId;
  await deleteUser(userId);
  res.redirect("/")
}
module.exports = {
  getHomePage,
  getABC,
  getCreateUsers,
  getCreatePage,
  getUpdatePage,
  updateUsers,
  getDeletePage,
  hanldeDelete
}