const Order = require("../models/Order.model")

const createOrder = async (req, res, next) => {
  try {
    await Order.syncIndexes();
    const newOrder = new Order(req.body);
    const saveOrder = await newOrder.save()
    return res.status(200).json(saveOrder)
  } catch (error) {
    return res.status(500).json({
      error: "Error creating the order",
      message: error.message
    })
  }
}

const deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndDelete(id);

  } catch (error) {
    return res.status(500).json({
      error: "Error in general operation",
      message: error.message
    })
  }
}

const getAll = async (req, res, next) => {
  try {
    const allOrders = await Order.find();
    return allOrders.length > 0
      ? res.status(200).json(allOrders)
      : res.status(404).json("there are no orders in the database")
  } catch (error) {
    return res.status(500).json({
      error: "Error in general operation",
      message: error.message
    })
  }
}

module.exports = {
  createOrder,
  deleteOrder,
  getAll
}