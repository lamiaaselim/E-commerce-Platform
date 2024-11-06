const express = require('express');
const cors = require('cors');
const compression = require("compression");
const morgan = require("morgan");


const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(compression());


module.exports = app;
