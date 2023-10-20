const {
  createAwnserService,
  getAwnserService,
  updateAwnserService,
  deleteAwnserInAwnserService
} = require("../services/awnserService")



module.exports = {
  createAwnserApi: async (req, res) => {
    const results = await createAwnserService(req.body);
    return res.status(200).json({
      EC: 0,
      data: results
    })
  },
  getAllAwnserApi: async (req, res) => {
    const results = await getAwnserService(req.query);
    return res.status(200).json({
      EC: 0,
      data: results
    })
  },
  updateAwnserApi: async (req, res) => {
    const results = await updateAwnserService(req.body);
    return res.status(200).json({
      EC: 0,
      data: results
    })
  },
  deleteAwnserInAwnserApi: async (req, res) => {
    const results = await deleteAwnserInAwnserService(req.body);
    return res.status(200).json({
      EC: 0,
      data: results
    })
  }
}