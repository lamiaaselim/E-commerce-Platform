// routes/order.route.js
const express = require("express");
const orderController = require("../controllers/order.controller");
const { authenticateUser } = require("../middleware/auth");

const router = express.Router();

router.route("/").post(authenticateUser, orderController.createOrder);
router.get("/:id", authenticateUser, orderController.getOrder);
// Additional routes for updating, deleting, etc.

module.exports = router;
