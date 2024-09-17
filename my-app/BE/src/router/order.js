import { Router } from 'express';
import {
  createOrder,
  getAllOrders,
  getOneOrder

} from '../controller/order.js';

const order = Router();

order
  .post('/create', createOrder)
  .get("/get",getAllOrders)
  .get("/get/:id",getOneOrder)


export default order;