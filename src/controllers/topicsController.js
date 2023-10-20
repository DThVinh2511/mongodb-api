const {
  createTopicService,
  getTopicService,
  putTopicService,
  deleteTopicService
} = require("../services/topicService");

module.exports = {
  createTopicApi: async (req, res) => {
    const results = await createTopicService(req.body);
    return res.status(200).json({
      EC: 0,
      data: results,
    })
  },
  getAllTopicsApi: async (req, res) => {
    const results = await getTopicService(req.query);
    return res.status(200).json({
      EC: 0,
      data: results,
    })
  },
  updateTopicApi: async (req, res) => {
    const results = await putTopicService(req.body);
    return res.status(200).json({
      EC: 0,
      data: results,
    })
  },
  deleteTopicApi: async (req, res) => {
    const results = await deleteTopicService(req.body.id);
    return res.status(200).json({
      EC: 0,
      data: results,
    })
  }
}