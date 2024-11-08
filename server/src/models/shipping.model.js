// models/shipping.model.js
const mongoose = require('mongoose');

const shippingSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
  status: { type: String, enum: ['pending', 'shipped', 'in transit', 'delivered'], default: 'pending' },
  shippedAt: { type: Date },
  deliveredAt: { type: Date },
});

module.exports = mongoose.model('Shipping', shippingSchema);
