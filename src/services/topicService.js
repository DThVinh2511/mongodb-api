const Topic = require("../models/topics")
const aqp = require('api-query-params');

module.exports = {
  createTopicService: async (data) => {
    try {
      const results = await Topic.create({
        name: data.name
      })
      return results;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getTopicService: async (queryString) => {
    try {
      const page = queryString.page;
      const {
        filter,
        limit
      } = aqp(queryString);
      const skip = (page - 1) * limit;
      delete filter.page;
      const results = await Topic.find(filter).skip(skip).limit(limit).exec();
      return results;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  putTopicService: async (data) => {
    try {
      const {
        id,
        name
      } = data;
      const results = await Topic.updateOne({
        _id: id
      }, {
        name
      })
      return results;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  deleteTopicService: async (id) => {
    try {
      const results = await Topic.deleteById(id);
      return results;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}