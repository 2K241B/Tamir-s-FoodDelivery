import { Router } from 'express';
import {
  createFood,
  getFood,
  getFoods,
} from '../controller/food.js';

const food = Router();

food
  .post('/create', createFood)
  .get("/get",getFoods)
  .get("/get/:id",getFood)
   
export default food;