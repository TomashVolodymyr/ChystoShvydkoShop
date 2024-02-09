const { Router } = require('express');
const ordersController = require('../controllers/ordersController');
const router = Router();

router.post('/create-order', ordersController.createOrder_post);

module.exports = router;