const Task = require("../models/task");
const aqp = require('api-query-params');

module.exports = {
  createTasksService: async (data) => {
    if (data.type === "EMPTY_TASK") {
      const results = await Task.create(data);
      return results;
    }
  },
  putTasksService: async (data) => {
    // console.log(...data);
    const results = await Task.updateOne({
      _id: data.id
    }, {
      ...data
    });
    return results;
  },
  getTasksService: async (queryString) => {
    const page = queryString.page;
    const {
      filter,
      limit,
    } = aqp(queryString);
    const skip = (page - 1) * limit;
    delete filter.page;
    const results = await Task.find(filter).skip(skip).limit(limit).exec();
    return results;
  },
  deleteTasksService: async (id) => {
    try {
      const results = await Task.deleteById(id);
      return results
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}