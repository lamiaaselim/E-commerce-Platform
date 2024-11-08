// services/shipping.service.js
const Shipping = require('../models/shipping.model');

class ShippingService {
  async createShippingDetails(shippingData) {
    const shipping = new Shipping(shippingData);
    return await shipping.save();
  }

  async updateShippingStatus(shippingId, status) {
    return await Shipping.findByIdAndUpdate(shippingId, { status }, { new: true });
  }

  async getShippingDetails(orderId) {
    return await Shipping.findOne({ order: orderId });
  }
}

module.exports = new ShippingService();
