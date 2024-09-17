import { Router } from 'express';
import {
  createCategory,
  getCategory
} from '../controller/category.js';

const category = Router();

category
  .post('/create', createCategory)
  .get('/get',getCategory)

export default category;