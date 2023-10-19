const express = require('express');

const {
  getUsersApi,
  postUploadSingleFile,
  postUploadMultipleFile,
  postUserApi,
  updateUserApi,
  deleteUserApi
} = require('../controllers/apiController');
const {
  postCreateCustomer,
  postCreateArrayCustomer,
  getAllCustomers,
  putACustomer,
  DeleteACustomer,
  DeleteArrayCustomer,
} = require('../controllers/customerController');
const {
  postCreateProject,
  getProject,
  updateProject,
  deleteproject
} = require('../controllers/projectController');
const {
  createTasks,
  updateTasks,
  getAllTasks,
  deleteTasks
} = require('../controllers/taskController');
const routerApi = express.Router();

routerApi.get('/', (req, res) => {
  res.send('hello world');
});

routerApi.get('/users', getUsersApi);
routerApi.post('/users', postUserApi);
routerApi.put('/users', updateUserApi);
routerApi.delete('/users', deleteUserApi)

routerApi.post('/files', postUploadSingleFile)
routerApi.post('/file', postUploadMultipleFile)



routerApi.post('/customer', postCreateCustomer);
routerApi.post('/customers-many', postCreateArrayCustomer);
routerApi.get('/customer', getAllCustomers);
routerApi.put('/customer', putACustomer)
routerApi.delete('/customer', DeleteACustomer)
routerApi.delete('/customers-many', DeleteArrayCustomer)


routerApi.post('/projects', postCreateProject);
routerApi.get('/projects', getProject);
routerApi.put('/projects', updateProject);
routerApi.delete('/projects', deleteproject);


routerApi.post('/tasks', createTasks);
routerApi.get('/tasks', getAllTasks);
routerApi.put('/tasks', updateTasks);
routerApi.delete('/tasks', deleteTasks);
module.exports = routerApi;