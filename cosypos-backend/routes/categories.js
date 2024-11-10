const express = require("express");
const Category = require("../models/Category");
const router = express.Router();

// Get all categories
router.get("/", async (req, res) => {
  const categories = await Category.find().populate("items");
  res.json(categories);
});

// Add a new category
router.post("/", async (req, res) => {
  const { name, icon } = req.body;
  const category = new Category({ name, icon });
  await category.save();
  res.json(category);
});

module.exports = router;
