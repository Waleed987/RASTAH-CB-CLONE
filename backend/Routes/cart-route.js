const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart-controller');

router.post('/order',cartController.insertItems);

module.exports = router;