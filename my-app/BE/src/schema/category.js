import { model, Schema } from 'mongoose';

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
});

export const categoryModel = model('category', categorySchema)