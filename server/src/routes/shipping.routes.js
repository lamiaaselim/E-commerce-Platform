// routes/shipping.routes.js
const express = require('express');
const shippingController = require('../controllers/shipping.controller');

const router = express.Router();

router.post('shippibg/', shippingController.createShipping);
router.patch('shippibg/:id/status', shippingController.updateShippingStatus);

module.exports = router;
