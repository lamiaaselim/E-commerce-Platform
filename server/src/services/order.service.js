// services/order.service.js
const Order = require('../models/order.model');

class OrderService {
  async createOrder(orderData) {
    const order = new Order(orderData);
    return await order.save();
  }

  async getOrderById(orderId) {
    return await Order.findById(orderId).populate('user products');
  }

  async updateOrder(orderId, updateData) {
    return await Order.findByIdAndUpdate(orderId, updateData, { new: true });
  }

  async deleteOrder(orderId) {
    return await Order.findByIdAndDelete(orderId);
  }

  async getUserOrders(userId) {
    return await Order.find({ user: userId });
  }
}

module.exports = new OrderService();
