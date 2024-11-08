// controllers/order.controller.js
const OrderService = require('../services/order.service');

exports.createOrder = async (req, res , next) => {
  try {
    const orderData = { ...req.body, user: req.user._id };
    const order = await OrderService.createOrder(orderData);
    res.status(201).json(order);
  } catch (error) {
    // res.status(500).json({ message: 'Error creating order', error });
    next(error);
  }
};

exports.getOrder = async (req, res) => {
  try {
    const order = await OrderService.getOrderById(req.params.id);
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching order', error });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await OrderService.getAllOrders();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching order', error });
  }
};

// Additional methods for update, delete, and fetching user orders
