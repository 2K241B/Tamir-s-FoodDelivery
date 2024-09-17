import { model, Schema } from 'mongoose';

const orderSchema = new Schema({
  userId: String,
  orderNumber: Number,
  foods: [],
  totalPrice: Number,
  process: { type: String, enum: [], default: '' },
  createdDate: Date,
  district: String,
  Khoroo: String,
  Apartment: String,
  Discription: String,
  PhoneNumber: String,
  MethodOfPay: { type: String, enum: [], default: '' },
});

export const orderModel = model('order', orderSchema);