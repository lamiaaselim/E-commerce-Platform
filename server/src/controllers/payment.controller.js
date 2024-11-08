// controllers/payment.controller.js
const PaymentService = require('../services/payment.service');

exports.createPayment = async (req, res) => {
  try {
    const payment = await PaymentService.createPayment(req.body);
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ message: 'Error creating payment', error });
  }
};

exports.updatePaymentStatus = async (req, res) => {
  try {
    const payment = await PaymentService.updatePaymentStatus(req.params.id, req.body.status);
    res.json(payment);
  } catch (error) {
    res.status(500).json({ message: 'Error updating payment status', error });
  }
};
