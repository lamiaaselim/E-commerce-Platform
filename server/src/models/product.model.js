const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  description: String,
  colors: [
    {
      color: { type: String, required: true},
      quantity: { type: Number, required: true },
      _id: false 
    }
  ],
  picture: {
    type: String,
    default: 'uploads/test.JPG',
  },
  category: {
    type: String,
    enum: ['Watches', 'Cameras', 'Headphones', 'Microphones'],
    required: true, 
  },
  subCategory: {
    type: String,
    enum: ['Men', 'Women'], // Subtypes for watches
    required: function() {
      return this.category === 'Watches'; // Make this field required if the category is Watches
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
