import { Router } from 'express';
import {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
  getCategoriesAndFoods
} from '../controller/category.js';

const category = Router();

category
  .post('/create', createCategory)
  .get('/get',getCategory)
  .get('/foods', getCategoriesAndFoods)
  .put('/update/:id',updateCategory)
  .delete('/delete/:id',deleteCategory)


export default category;