const Awnser = require("../models/answers");
const aqp = require('api-query-params');

module.exports = {
  createAwnserService: async (data) => {
    try {
      if (data.type === "EMPTY_AWNSER") {
        const {
          userId,
          topicId
        } = data;
        const results = await Awnser.create({
          userId,
          topicId
        })
        return results;
      } else if (data.type === "REMOVE_AWNSER") {
        let myAwnser = await Awnser.findById(data.awnserId).exec();
        console.log(myAwnser);
        for (let i = 0; i < data.awnserArr.length; i++) {
          myAwnser.answers.pull(data.awnserArr[i]);
        }
        const newResults = await myAwnser.save();
        return newResults;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getAwnserService: async (queryString) => {
    try {
      const page = queryString.page;
      const {
        filter,
        limit,
      } = aqp(queryString);
      const skip = (page - 1) * limit;
      delete filter.page;
      const results = await Awnser.find(filter).skip(skip).limit(limit).exec();
      return results;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  updateAwnserService: async (data) => {
    try {
      let myAwnser = await Awnser.findById(data.awnserId).exec();
      console.log(myAwnser);
      for (let i = 0; i < data.awnserArr.length; i++) {
        myAwnser.answers.push({
          questionId: data.awnserArr[i].questionId,
          answer: data.awnserArr[i].answer
        });
      }

      const newResults = await myAwnser.save();
      return newResults;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}