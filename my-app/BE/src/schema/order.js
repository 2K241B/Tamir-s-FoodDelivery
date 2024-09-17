import { model, Schema } from "mongoose";

const orderSchema = new Schema({
  userId: { type: String, required: true },
  orderNumber: { type: Number, required: true, unique: true },
  foods: { type: Array, required: true },
  totalPrice: { type: Number, required: true },
  process: {
    type: String,
    enum: ["хүлээгдэж байга", "хоол гарсан", "хүргэгдэж байна", "хүргэгдсэн"],
    default: "хүлээгдэж байга",
  },
  createdDate: { type: Date, default: Date.now },
  district: { type: String, required: true },
  Khoroo: { type: String, required: true },
  Apartment: { type: String, required: true },
  Description: { type: String },
  PhoneNumber: { type: Number, required: true },
  MethodOfPay: { type: String, enum: ["card", "transfer"], default: "cash" },
});

export const orderModel = model("Order", orderSchema);
