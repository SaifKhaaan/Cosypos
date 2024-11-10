const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

// Add a new order
router.post("/", async (req, res) => {
  const { items, subtotal, tax, total } = req.body;
  const order = new Order({ items, subtotal, tax, total });
  await order.save();
  res.json(order);
});

module.exports = router;
