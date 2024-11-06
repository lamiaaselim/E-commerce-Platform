const express = require("express");

const UserController = require("../controllers/user.controller");

const router = express.Router();
router.route("/register").post(UserController.register);
router.route("/login").post(UserController.login);

module.exports = router;
