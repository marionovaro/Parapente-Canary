const { createOrder, deleteOrder, getAll } = require("../controllers/Order.controller");

const OrderRoutes = require("express").Router();

OrderRoutes.post("/", createOrder);
OrderRoutes.delete("/:id", deleteOrder);
OrderRoutes.get("/", getAll);

module.exports = OrderRoutes