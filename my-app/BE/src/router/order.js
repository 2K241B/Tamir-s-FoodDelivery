import { Router } from 'express';
import {
  createOrder,
  getAllOrders,
  getOneOrder,
  updateOrder

} from '../controller/order.js';

const order = Router();

order
  .post('/create', createOrder)
  .get("/get",getAllOrders)
  .get("/get/:id",getOneOrder)
  .put("/update/:id",updateOrder)


export default order;