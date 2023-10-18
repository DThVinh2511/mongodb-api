const Customer = require("../models/customer");
const aqp = require('api-query-params');

const createCustomer = async (customerData) => {
  try {
    const results = await Customer.create({
      name: customerData.name,
      address: customerData.address,
      phone: customerData.phone,
      email: customerData.email,
      description: customerData.description,
      image: customerData.image
    });
    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
}
const createArrayCustomers = async (arr) => {
  try {
    const results = await Customer.insertMany(arr);
    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
}
const getAllCustomerService = async (limit, page, api) => {
  try {
    let results = null
    if (limit && page) {
      const skip = (page - 1) * limit;
      const {
        filter
      } = aqp(api);
      delete filter.page;
      results = await Customer.find(filter).skip(skip).limit(limit).exec();
    } else {
      results = await Customer.find({});
    }
    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
}
const putCustomer = async (arr) => {
  const {
    id,
    name,
    email,
    address
  } = arr;
  try {
    const results = await Customer.updateOne({
      _id: id
    }, {
      name,
      email,
      address
    });
    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
}
const deleteCustomer = async (id) => {
  try {
    const result = await Customer.deleteById(id);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
const DeleteArrayCustomerService = async (arrayId) => {
  try {
    const results = await Customer.delete({
      _id: {
        $in: arrayId
      }
    });
    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
}
module.exports = {
  createCustomer,
  createArrayCustomers,
  getAllCustomerService,
  putCustomer,
  deleteCustomer,
  DeleteArrayCustomerService
}