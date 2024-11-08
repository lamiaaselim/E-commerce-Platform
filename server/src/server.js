const http = require("http");
const express = require("express");
const path = require("path");
const app = require("./app");
const dbConnect = require("./config/db.config");
const socketConfig = require("./config/socket.config");
const productRoutes = require("./routes/product.routes");
const userRoutes = require("./routes/user.routes");
const orderRoutes = require("./routes/order.routes");
const orderHistoryRoutes = require("./routes/orderHistory.routes");
const paymentRoutes = require("./routes/payment.routes");
const shippingRoutes = require("./routes/shipping.routes");
const NotFoundMiddleware = require("./middlewares/NotFoundMW");
const ErrorMiddleware = require("./middlewares/ErrorMW");

// Connect to MongoDB
dbConnect();

// Create HTTP server
const server = http.createServer(app);

// Set up Socket.IO
const io = socketConfig(server);

// Middleware to inject Socket.IO instance in the request
app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use("/api/uploads", express.static("./uploads"));

// Routes setup after io middleware
app.use("/api", productRoutes);
app.use("/api/user", userRoutes);
app.use("/api/", orderRoutes);
app.use("/api/", orderHistoryRoutes);
app.use("/api/", paymentRoutes);
app.use("/api/", shippingRoutes);

//Not Found Handling MW
app.use(NotFoundMiddleware.handle);

// Error Handling MW
app.use(ErrorMiddleware.handle);

// Start the server
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
