import { otpModel } from '../schema/otp.js';
import { userModel } from '../schema/user.js';
import { sendMail } from './mail.js';

export const createOTP = async (req, res) => {
  const { email } = req.body;
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    await otpModel.findOneAndDelete({ email });
    await otpModel.create({ email, otp: randomNumber, createdAt: new Date() });
    await sendMail({ to: email, otp: randomNumber });
    
    return res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error creating OTP:', error);
    return res.status(500).json(user,{ message: 'Internal server error' });
  }
};

export const Check = async (req, res) => {
  const { email, otp } = req.body;
  try {
    const otpRecord = await otpModel.findOne({ email, otp });
    if (!otpRecord) {
      return res.status(404).json({ message: 'OTP not found or incorrect' });
    }
    
    const currentTime = new Date();
    const timeDiff = (currentTime - new Date(otpRecord.createdAt)) / 1000 / 60; 
    
    if (timeDiff > 5) {
      await otpModel.findOneAndDelete({ email, otp });
      return res.status(400).json({ message: 'OTP expired' });
    }
    
    await otpModel.findOneAndDelete({ email, otp });
    return res.status(200).json({ message: 'OTP verified successfully' });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
