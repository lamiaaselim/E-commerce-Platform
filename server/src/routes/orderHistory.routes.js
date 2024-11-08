// routes/orderHistory.routes.js
const express = require('express');
const orderHistoryController = require('../controllers/orderHistory.controller');

const router = express.Router();

router.get('orderHistory/:orderId', orderHistoryController.getOrderHistory);

module.exports = router;
