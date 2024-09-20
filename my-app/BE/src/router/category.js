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
  .put('/update/:id',updateCategory)
  .delete('/delete/:id',deleteCategory)


export default category;