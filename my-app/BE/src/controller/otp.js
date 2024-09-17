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
    const response = await otpModel.findOneAndDelete({ email, otp });

    if (!response) return res.status(404).send('OTP not found');

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
