// services/orderHistory.service.js
const OrderHistory = require('../models/orderHistory.model');

class OrderHistoryService {
  async logStatusChange(orderId, status, note = '') {
    const historyEntry = new OrderHistory({ order: orderId, status, note });
    return await historyEntry.save();
  }

  async getOrderHistory(orderId) {
    return await OrderHistory.find({ order: orderId });
  }
}

module.exports = new OrderHistoryService();
