const express = require("express");
const Transaction = require("../models/Transaction");
const router = express.Router();

// Get all transactions
router.get("/", async (req, res) => {
  const transactions = await Transaction.find();
  res.json(transactions);
});

// Add a new transaction
router.post("/", async (req, res) => {
  const { name, items, subtotal, tax, total } = req.body;
  const transaction = new Transaction({ name, items, subtotal, tax, total });
  await transaction.save();
  res.json(transaction);
});

module.exports = router;
