const express = require("express");
const Item = require("../models/Item");
const router = express.Router();

// Get all items
router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Add a new item
router.post("/", async (req, res) => {
  const { title, price, categoryId } = req.body;
  const item = new Item({ title, price, categoryId });
  await item.save();
  res.json(item);
});

module.exports = router;
