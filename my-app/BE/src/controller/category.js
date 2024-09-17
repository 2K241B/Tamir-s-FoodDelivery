import { categoryModel } from '../schema/category.js';

export const createCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const response = await categoryModel.create({ name });
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getCategory = async (req, res) => {
    try {
      const response = await categoryModel.find();
      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  };