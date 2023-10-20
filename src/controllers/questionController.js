const {
  createQuestionService,
  getAllQuestionService
} = require("../services/questionService")


module.exports = {
  createQuestionApi: async (req, res) => {
    const results = await createQuestionService(req.body);
    return res.status(200).json({
      EC: 0,
      data: results
    })
  },
  getAllQuestionApi: async (req, res) => {
    const results = await getAllQuestionService(req.query);
    return res.status(200).json({
      EC: 0,
      data: results
    })
  }
}