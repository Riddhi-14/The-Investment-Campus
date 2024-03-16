// server/controllers/orderController.js

const Order = require('../models/order');

async function createOrder(req, res) {
  try {
    const { productName, quantity, price, userId } = req.body;
    const order = new Order({ productName, quantity, price, userId });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function getAllOrders(req, res) {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getOrder(req, res) {
  res.json(res.order);
}

module.exports = {
  createOrder,
  getAllOrders,
  getOrder
};
