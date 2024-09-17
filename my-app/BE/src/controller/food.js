import { foodModel } from '../schema/food.js';

export const createFood = async (req, res) => {
  const { name, image, ingeredient, price, discount, categoryId } = req.body;

  try {
    const response = await foodModel.create({
      name,
      image,
      ingeredient,
      price,
      discount,
      categoryId,
    });
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};