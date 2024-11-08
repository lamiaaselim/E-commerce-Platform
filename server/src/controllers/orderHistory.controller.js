// controllers/orderHistory.controller.js
const OrderHistoryService = require('../services/orderHistory.service');

exports.getOrderHistory = async (req, res) => {
  try {
    const history = await OrderHistoryService.getOrderHistory(req.params.orderId);
    res.json(history);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching order history', error });
  }
};
