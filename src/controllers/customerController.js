const {
  createCustomer,
  createArrayCustomers,
  getAllCustomerService,
  putCustomer,
  deleteCustomer,
  DeleteArrayCustomerService
} = require("../services/customerService");
const {
  uploadSingleFile
} = require("../services/filesService");
module.exports = {
  postCreateCustomer: async (req, res) => {

    let {
      name,
      address,
      phone,
      email,
      description
    } = req.body;

    console.log('>>>check : ', name, description);
    // image: String,

    let imageUrl = "";
    if (!req.files || Object.keys(req.files).length === 0) {
      //do nothing
    } else {
      let results = await uploadSingleFile(req.files.image);
      imageUrl = results.path;
    }
    let customerData = {
      name,
      address,
      phone,
      email,
      description,
      image: imageUrl
    }
    const customer = await createCustomer(customerData);
    return res.status(200).json({
      EC: 0,
      data: customer
    })
  },
  postCreateArrayCustomer: async (req, res) => {
    const customers = await createArrayCustomers(req.body.customers);
    return res.status(200).json({
      EC: 0,
      data: customers
    })
  },
  getAllCustomers: async (req, res) => {
    const limit = req.query.limit;
    const page = req.query.page;
    let listCustomers = null;
    if (limit && page) {
      listCustomers = await getAllCustomerService(limit, page, req.query);
    } else {
      listCustomers = await getAllCustomerService();
    }
    return res.status(200).json({
      EC: 0,
      data: listCustomers
    })
  },
  putACustomer: async (req, res) => {
    const results = await putCustomer(req.body);
    return res.status(200).json({
      EC: 0,
      data: results
    })
  },
  DeleteACustomer: async (req, res) => {
    const id = req.body.id;
    const results = await deleteCustomer(id);
    return res.status(200).json({
      EC: 0,
      data: results
    })
  },
  DeleteArrayCustomer: async (req, res) => {
    const results = await DeleteArrayCustomerService(req.body.customersId);
    return res.status(200).json({
      EC: 0,
      data: results
    })
  }
}