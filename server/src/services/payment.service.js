// services/payment.service.js
const Payment = require('../models/payment.model');

class PaymentService {
  async createPayment(paymentData) {
    const payment = new Payment(paymentData);
    return await payment.save();
  }

  async updatePaymentStatus(paymentId, status) {
    return await Payment.findByIdAndUpdate(paymentId, { status }, { new: true });
  }

  async getPaymentDetails(paymentId) {
    return await Payment.findById(paymentId);
  }
}

module.exports = new PaymentService();
