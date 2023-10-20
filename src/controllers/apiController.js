const User = require('../models/user');
const aqp = require('api-query-params');
const {
  uploadSingleFile,
  uploadMultipleFile
} = require('../services/filesService');

const getUsersApi = async (req, res) => {
  let results = null
  const limit = req.query.limit;
  const page = req.query.page;
  if (limit && page) {
    const skip = (page - 1) * limit;
    const {
      filter
    } = aqp(req.query);
    delete filter.page;
    results = await User.find(filter).skip(skip).limit(limit).exec();
  } else {
    results = await User.find({});
  }
  return res.status(200).json({
    errorCode: 0,
    data: results
  })
}
const postUserApi = async (req, res) => {
  try {
    const results = await User.create({
      fullname: req.body.fullname,
      email: req.body.email,
      password: req.body.password,
      token: req.body.token
    })
    return res.status(200).json({
      errorCode: 0,
      data: results
    })
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errorCode: 0,
      data: null
    })
  }
}
const updateUserApi = async (req, res) => {
  try {
    const {
      id,
      fullname,
      email,
      password,
      token
    } = req.body;
    const results = await User.updateOne({
      _id: id
    }, {
      fullname,
      email,
      password,
      token
    });
    return res.status(200).json({
      errorCode: 0,
      data: results
    })
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errorCode: 0,
      data: null
    })
  }
}
const deleteUserApi = async (req, res) => {
  try {
    const results = await User.deleteById(req.body.id);
    return res.status(200).json({
      errorCode: 0,
      data: results
    })
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errorCode: 0,
      data: null
    })
  }
}
const postUploadSingleFile = async (req, res) => {
  console.log('req file = ', req.files);
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let results = await uploadSingleFile(req.files.image);
  return res.status(200).json({
    EC: 0,
    data: results
  })
}
const postUploadMultipleFile = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  if (Array.isArray(req.files.image)) {

    let results = await uploadMultipleFile(req.files.image);
    return res.status(200).json({
      EC: 0,
      data: results
    })
  } else {
    return await postUploadSingleFile(req, res);
  }
}
module.exports = {
  getUsersApi,
  postUploadSingleFile,
  postUploadMultipleFile,
  postUserApi,
  updateUserApi,
  deleteUserApi
}