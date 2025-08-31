const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order-controller');

// Create order from cart (checkout)
router.post('/checkout', orderController.createOrderFromCart);

// Get user's order history
router.get('/user', orderController.getUserOrders);

// Get all orders (admin)
router.get('/admin/all', orderController.getAllOrders);

// Get specific order by ID
router.get('/:orderId', orderController.getOrderById);

// Update order status (admin)
router.patch('/:orderId/status', orderController.updateOrderStatus);

// Update payment status
router.patch('/:orderId/payment', orderController.updatePaymentStatus);

// Cancel order
router.patch('/:orderId/cancel', orderController.cancelOrder);

module.exports = router;
