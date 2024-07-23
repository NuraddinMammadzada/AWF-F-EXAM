const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  const { gender } = req.query;

  try {
    const products = await Product.find({ category: gender });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});

router.post('/', async (req, res) => {
  const { name, price, description, category } = req.body;

  try {
    const product = new Product({ name, price, description, category });
    await product.save();
    res.status(201).json({ message: 'Product added' });
  } catch (err) {
    res.status(500).json({ message: 'Error adding product' });
  }
});

module.exports = router;
