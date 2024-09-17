import { orderModel } from '../schema/order.js';

export const createOrder = async (req, res) => {
  const { 
    userId, 
    orderNumber, 
    Khoroo, 
    district, 
    totalPrice, 
    foods, 
    Apartment, 
    PhoneNumber, 
    Description, 
    MethodOfPay 
  } = req.body;

  try {
    const newOrder = await orderModel.create({
      userId,
      orderNumber,
      Khoroo,
      district,
      totalPrice,
      foods,
      Apartment,
      PhoneNumber,
      Description,
      MethodOfPay,
    });

    console.log('Order created successfully:', newOrder);
    return res.status(200).json(newOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    return res.status(500).json({ error: 'Failed to create order' });
  }
};


import { orderModel } from '../schema/order.js';

export const getAllOrders = async (req, res) => {
  try {
    const orders = await orderModel.find(); 
    return res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    return res.status(500).json({ error: 'Failed to fetch orders' });
  }
};
