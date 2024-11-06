const express = require("express");
const ProductController = require("../controllers/product.controller");
const upload = require("../middlewares/upload.middleware");

const router = express.Router();

router
  .route("/products")
  .get(ProductController.getAllProducts)
  .post(upload.single("picture"), ProductController.createProduct);
router
  .route("/products/:id")
  .put(upload.single("picture"),  ProductController.updateProduct)
  .delete(ProductController.deleteProduct);

module.exports = router;
