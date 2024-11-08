// models/orderHistory.model.js
const mongoose = require('mongoose');

const orderHistorySchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  status: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
  note: { type: String }, // Optional note on status change
});

module.exports = mongoose.model('OrderHistory', orderHistorySchema);
