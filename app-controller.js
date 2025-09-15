// app-controller.js — router for /products
const express = require('express');
const router = express.Router();


// In-memory product list
const products = [
{ id: 1, name: 'T-Shirt', price: 299.0 },
{ id: 2, name: 'Coffee Mug', price: 199.0 },
{ id: 3, name: 'Notebook', price: 149.0 }
];


// GET /products -> list
router.get('/', (req, res) => {
res.json(products);
});


// GET /products/:id -> single product
router.get('/:id', (req, res) => {
const id = Number(req.params.id);
const p = products.find(x => x.id === id);
if (!p) return res.status(404).json({ error: 'Product not found' });
res.json(p);
});


module.exports = router;
