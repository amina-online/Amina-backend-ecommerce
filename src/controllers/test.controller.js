const testService = require("../services/test.service");

const healthCheck = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is working!",
  });
};

const createTest = async (req, res) => {
  try {
    const test = await testService.createTest(req.body);
    res.status(201).json({ success: true, data: test });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getAllTests = async (req, res) => {
  try {
    const tests = await testService.getAllTests();
    res.status(200).json({ success: true, data: tests });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { healthCheck, createTest, getAllTests };
