// controllers/shipping.controller.js
const ShippingService = require('../services/shipping.service');

exports.createShipping = async (req, res) => {
  try {
    const shipping = await ShippingService.createShippingDetails(req.body);
    res.status(201).json(shipping);
  } catch (error) {
    res.status(500).json({ message: 'Error creating shipping details', error });
  }
};

exports.updateShippingStatus = async (req, res) => {
  try {
    const shipping = await ShippingService.updateShippingStatus(req.params.id, req.body.status);
    res.json(shipping);
  } catch (error) {
    res.status(500).json({ message: 'Error updating shipping status', error });
  }
};
