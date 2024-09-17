import { Router } from 'express';
import {
  createOrder,
  getAllOrders,

} from '../controller/order.js';

const order = Router();

order
  .post('/create', createOrder)
  .get("/get",getAllOrders)


export default order;