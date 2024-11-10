const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  items: [{ title: String, price: Number, quantity: Number }],
  subtotal: Number,
  tax: Number,
  total: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
