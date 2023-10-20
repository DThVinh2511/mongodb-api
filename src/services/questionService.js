const Question = require("../models/question");
const aqp = require('api-query-params');

module.exports = {
  createQuestionService: async (data) => {
    try {
      console.log(data);
      const {
        topicId,
        question,
        answers,
        correctAnswer,
      } = data;
      const results = await Question.create({
        topicId,
        question,
        answers,
        correctAnswer,
      });
      return results;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getAllQuestionService: async (queryString) => {
    try {
      const page = queryString.page;
      const {
        filter,
        limit,
      } = aqp(queryString);
      const skip = (page - 1) * limit;
      delete filter.page;
      const results = await Question.find(filter).skip(skip).limit(limit).exec();
      return results;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}