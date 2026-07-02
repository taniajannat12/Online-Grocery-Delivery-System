import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    paymentMethod: {
      type: String,
      required: true,
    },

    transactionId: {
      type: String,
      required: true,
    },

    items: {
      type: Array,
      required: true,
    },

    total: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const Order =
  mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default Order;