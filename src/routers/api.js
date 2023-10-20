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
const {
  createTopicApi,
  getAllTopicsApi,
  updateTopicApi,
  deleteTopicApi
} = require('../controllers/topicsController');
const {
  createQuestionApi,
  getAllQuestionApi
} = require('../controllers/questionController');
const {
  createAwnserApi,
  getAllAwnserApi,
  updateAwnserApi,
  deleteAwnserInAwnserApi
} = require('../controllers/awnserController');
const routerApi = express.Router();

routerApi.get('/', (req, res) => {
  res.send('hello world');
});
// quizz
// user
routerApi.get('/users', getUsersApi);
routerApi.post('/users', postUserApi);
routerApi.put('/users', updateUserApi);
routerApi.delete('/users', deleteUserApi)
// end user
//topic
routerApi.post('/topics', createTopicApi);
routerApi.get('/topics', getAllTopicsApi);
routerApi.put('/topics', updateTopicApi);
routerApi.delete('/topics', deleteTopicApi);
// end topic
// question
routerApi.post('/questions', createQuestionApi);
routerApi.get('/questions', getAllQuestionApi);
// end question
// awnser
routerApi.post('/awnsers', createAwnserApi);
routerApi.get('/awnsers', getAllAwnserApi);
routerApi.put('/awnsers', updateAwnserApi);
// end awnser
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