const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventory-controller');

router.get('/collection/:productName',inventoryController.getItem);
router.post('/collection',inventoryController.insertItem);
router.delete('/collection/:productName',inventoryController.deleteItem);

module.exports = router;