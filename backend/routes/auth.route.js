const express = require("express");
const register = require("../helpers/valid");
const validate = require("../middlewares/validate");
const { registerController } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/register", validate(register), registerController);

module.exports = router;
