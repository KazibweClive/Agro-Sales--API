// Import express
const express = require('express');
const getCategories = require('../controllers/categoryController');

// create a router itself
const router =  express.Router();

// continuation of creating a router itself
// Middleware
router.get('/', getCategories)

// Export the productRouter (you do this so that you can export it somewhere if need be)
module.exports = router;