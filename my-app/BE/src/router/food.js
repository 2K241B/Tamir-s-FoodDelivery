import { Router } from 'express';
import {
  createFood,
  getFoods,
} from '../controller/food.js';

const food = Router();

food
  .post('/create', createFood)
  .get("/get",getFoods)
   
export default food;