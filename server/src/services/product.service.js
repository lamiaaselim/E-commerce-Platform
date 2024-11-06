const Product = require('../models/product.model');

exports.getAllProducts = async () => {
  return await Product.find();
};

exports.createProduct = async (data) => {
  const newProduct = new Product(data);
  return await newProduct.save();
};

exports.updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};
