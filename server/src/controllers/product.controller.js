const ProductService = require("../services/product.service");

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await ProductService.getAllProducts();
    res.json(products);
  } catch (err) {
    next(err);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const productData = {
      ...req.body,
      picture: req.file ? req.file.path.replace(/\\/g, "/") : undefined, // Use uploaded image path or default to undefined
    };

    if (req.file) {
      productData.imageUrl = `uploads/${req.file.filename}`; // Save image path
    }
    const newProduct = await ProductService.createProduct(productData);
    req.io.emit("productCreated", newProduct); // Emit event for real-time update
    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const productData = {
      ...req.body,
      picture: req.file ? `uploads/${req.file.filename}` : req.body.picture, // Update image path if a new file is uploaded
    };

    const updatedProduct = await ProductService.updateProduct(
      req.params.id,
      productData
    );
    req.io.emit("productUpdated", updatedProduct); // Emit event for real-time update
    res.json(updatedProduct);
  } catch (err) {
    next(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    await ProductService.deleteProduct(req.params.id);
    req.io.emit("productDeleted", req.params.id); // Emit event for real-time update
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
