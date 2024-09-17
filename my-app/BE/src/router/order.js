import { Router } from 'express';
import {
  createOrder,
  getAllOrders,
  getOneOrder,
  updateOrder,
  deleteOrder
} from '../controller/order.js';

const order = Router();

order
  .post('/create', createOrder)
  .get("/get",getAllOrders)
  .get("/get/:id",getOneOrder)
  .put("/update/:id",updateOrder)
  .delete("/delete/:id",deleteOrder)


export default order;