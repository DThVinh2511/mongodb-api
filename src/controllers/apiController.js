const User = require('../models/user');
const {
  uploadSingleFile,
  uploadMultipleFile
} = require('../services/filesService');

const getUsersApi = async (req, res) => {
  const results = await User.find({});

  return res.status(200).json({
    errorCode: 0,
    data: results
  })
}
const postUserApi = async (req, res) => {
  try {
    const results = await User.create({
      name: req.body.name,
      email: req.body.email,
      city: req.body.city
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
  postUserApi
}