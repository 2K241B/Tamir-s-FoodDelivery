import { Router } from 'express';
import {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory
} from '../controller/category.js';

const category = Router();

category
  .post('/create', createCategory)
  .get('/get',getCategory)
  .put('/update',updateCategory)
  .delete('/delete',deleteCategory)


export default category;