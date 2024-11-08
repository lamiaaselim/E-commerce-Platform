// routes/order.routes.js
const express = require("express");
const orderController = require("../controllers/order.controller");
const authUser = require('./../middlewares/authenticateMW')

const router = express.Router();

router.route("/order").post(authUser.protect,orderController.createOrder);
router.get("/order/:id", orderController.getOrder);
// Additional routes for updating, deleting, etc.

module.exports = router;
