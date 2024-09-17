import { Router } from 'express';
import {
  createFood,
  updateFood,
  getFood,
  getFoods,
} from '../controller/food.js';

const food = Router();

food
  .post('/create', createFood)
  .get("/get",getFoods)
  .get("/get/:id",getFood)
  .put("/update/:id",updateFood)
export default food;