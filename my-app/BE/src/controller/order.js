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

export const getAllOrders = async (req, res) => {
  try {
    const orders = await orderModel.find(); 
    return res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    return res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

export const getOneOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await orderModel.findById(id); 
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    return res.status(200).json(order);
  } catch (error) {
    console.error('Error fetching order:', error);
    return res.status(500).json({ error: 'Failed to fetch order' });
  }
};

export const updateOrder = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedOrder = await orderModel.findByIdAndUpdate(id, updates, { new: true }); 
    if (!updatedOrder) {
      return res.status(404).json({ error: 'Order not found' });
    }
    return res.status(200).json(updatedOrder);
  } catch (error) {
    console.error('Error updating order:', error);
    return res.status(500).json({ error: 'Failed to update order' });
  }
};

export const deleteOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedOrder = await orderModel.findByIdAndDelete(id); 
    if (!deletedOrder) {
      return res.status(404).json({ error: 'Order not found' });
    }
    return res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    console.error('Error deleting order:', error);
    return res.status(500).json({ error: 'Failed to delete order' });
  }
};

