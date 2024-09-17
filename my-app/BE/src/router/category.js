import { Router } from 'express';
import {
  createCategory,
  getCategory,
  updateCategory,
} from '../controller/category.js';

const category = Router();

category
  .post('/create', createCategory)
  .get('/get',getCategory)
  .put('/update',updateCategory)

export default category;