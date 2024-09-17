import { Router } from 'express';
import {
  createFood,
} from '../controller/food.js';

const food = Router();

food
  .post('/create', createFood)

export default food;