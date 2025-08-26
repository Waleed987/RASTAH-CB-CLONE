const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart-controller');

router.post('/order',cartController.insertItems);
router.get('/order/:userId',cartController.getCartItem);

module.exports = router;