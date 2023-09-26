const express = require('express');
const imageController = require('../controllers/imageController');

const router = express.Router();

router.get('/images', imageController.getAllImages);

// Add other routes as needed

module.exports = router;

