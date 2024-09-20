import { Router } from 'express';
import {
  createFood,
  updateFood,
  getFood,
  getFoods,
  foodDelete
} from '../controller/food.js';

const food = Router();

food
  .post('/create', createFood)
  .get("/get",getFoods)
  .get("/:id",getFood)
  .put("/update/:id",updateFood)
  .delete("/delete/:id",foodDelete)
export default food;