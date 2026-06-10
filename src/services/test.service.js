const Test = require("../models/test.model");

const createTest = async (data) => {
  return await Test.create(data);
};

const getAllTests = async () => {
  return await Test.find();
};

module.exports = { createTest, getAllTests };
