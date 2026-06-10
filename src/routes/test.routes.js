const express = require("express");
const router = express.Router();
const testController = require("../controllers/test.controller");

router.get("/health", testController.healthCheck);
router.post("/", testController.createTest);
router.get("/", testController.getAllTests);

module.exports = router;
