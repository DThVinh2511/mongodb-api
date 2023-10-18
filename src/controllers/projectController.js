const {
  postCreateProjectService,
  getAllProjectService,
  putProjectService,
  deleteProjectService
} = require("../services/projectService");

module.exports = {
  postCreateProject: async (req, res) => {
    const results = await postCreateProjectService(req.body);
    return res.status(200).json({
      EC: 0,
      data: results
    })
  },
  getProject: async (req, res) => {
    const results = await getAllProjectService(req.query);
    return res.status(200).json({
      EC: 0,
      data: results
    })
  },
  updateProject: async (req, res) => {
    const results = await putProjectService(req.body);
    return res.status(200).json({
      EC: 0,
      data: results
    })
  },
  deleteproject: async (req, res) => {
    const results = await deleteProjectService(req.body.id);
    return res.status(200).json({
      EC: 0,
      data: results
    })
  }
}