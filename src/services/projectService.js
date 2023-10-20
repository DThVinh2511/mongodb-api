const Project = require("../models/project");
const aqp = require('api-query-params');

const postCreateProjectService = async (data) => {
  if (data.type === "EMPTY_PROJECT") {
    const results = await Project.create(data);
    return results;
  } else if (data.type === "ADD_USER") {
    let myProject = await Project.findById(data.projectId).exec();
    console.log(myProject);
    for (let i = 0; i < data.userArr.length; i++) {
      myProject.usersInfor.push(data.userArr[i]);
    }

    const newResults = await myProject.save();
    return newResults;
  } else if (data.type === "REMOVE_USER") {
    let myProject = await Project.findById(data.projectId).exec();
    for (let i = 0; i < data.userArr.length; i++) {
      myProject.usersInfor.pull(data.userArr[i]);
    }
    const newResults = await myProject.save();
    return newResults;
  } else if (data.type === "ADD_TASKS") {
    let myProject = await Project.findById(data.projectId).exec();
    for (let i = 0; i < data.taskArr.length; i++) {
      myProject.tasks.push(data.taskArr[i]);
    }
    const newResults = await myProject.save();
    return newResults;
  }
}
const getAllProjectService = async (queryString) => {
  const page = queryString.page;
  const {
    filter,
    limit,
    population
  } = aqp(queryString);
  const skip = (page - 1) * limit;
  delete filter.page;
  const results = await Project.find(filter).populate(population).skip(skip).limit(limit).exec();
  return results;
}

const putProjectService = async (data) => {
  const {
    id,
    name,
    endDate,
    description
  } = data;
  const results = await Project.updateOne({
    _id: id
  }, {
    name,
    endDate,
    description
  });
  return results;
}

const deleteProjectService = async (id) => {
  const results = await Project.deleteById(id);
  return results
}
module.exports = {
  postCreateProjectService,
  getAllProjectService,
  putProjectService,
  deleteProjectService
}