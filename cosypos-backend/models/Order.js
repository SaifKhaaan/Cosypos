const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  items: [{ title: String, price: Number, quantity: Number }],
  subtotal: Number,
  tax: Number,
  total: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", OrderSchema);
