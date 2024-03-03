const validator = require("validator"); //? validamos información
const mongoose = require("mongoose")

const Schema = mongoose.Schema
const OrderSchema = new Schema(
  {
    date: { type: Date, required: false },
    time: { type: Number, required: true, enum: [9, 12, 15] },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: [validator.isEmail, "Set a valid email address."],
    },
    phoneNumber: { type: Number, required: true },
    weight: { type: Number, required: true },
    name: { type: String, required: true, trim: true },
    product: { type: String, required: false, trim: true },
    quantity: { type: Number, required: true }, 
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order