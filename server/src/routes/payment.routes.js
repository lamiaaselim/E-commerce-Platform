// routes/payment.routes.js
const express = require('express');
const paymentController = require('../controllers/payment.controller');

const router = express.Router();

router.post('payment/', paymentController.createPayment);
router.patch('payment/:id/status', paymentController.updatePaymentStatus);

module.exports = router;
