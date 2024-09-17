import { Router } from 'express';
import {
  createCategory
} from '../controller/category.js';

const category = Router();

category
  .post('/create', createCategory)

export default category;