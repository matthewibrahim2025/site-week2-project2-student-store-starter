const express = require("express");
const cors = require("cors");
const app = express();
const dataModel = require("../models/product.js");

app.use(express.json());

app.use(cors());

app.get("/store", (req, res) => {
  const products = dataModel.getAllProds();
  res.json(products);
});

app.get("/store/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = dataModel.getProdById(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send(`Product with id ${id} does not exist`);
  }
});

module.exports = app;
