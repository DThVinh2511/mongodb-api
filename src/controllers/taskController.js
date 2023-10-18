const {
  createTasksService,
  putTasksService,
  getTasksService,
  deleteTasksService
} = require("../services/tasksService");

module.exports = {
  createTasks: async (req, res) => {
    const results = await createTasksService(req.body);
    return res.status(200).json({
      EC: 0,
      data: results
    })
  },
  updateTasks: async (req, res) => {
    const results = await putTasksService(req.body);
    return res.status(200).json({
      EC: 0,
      data: results
    })
  },
  getAllTasks: async (req, res) => {
    const results = await getTasksService(req.query);
    return res.status(200).json({
      EC: 0,
      data: results
    })
  },
  deleteTasks: async (req, res) => {
    const results = await deleteTasksService(req.body.id);
    return res.status(200).json({
      EC: 0,
      data: results
    })
  }
}