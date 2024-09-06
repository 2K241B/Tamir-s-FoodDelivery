import { userModel } from "../schema/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const Login = async (req, res) => {
  const { email, password } = req.body;

  const SECRET_KEY = process.env.SECRET_KEY;
  
  try {
    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).send({ message: "User not found" });

    const isMatch =  await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(403).send({ message: "username or password wrong" });

    const token = jwt.sign({ user }, SECRET_KEY);
    res.cookie('token', token, {
        httpOnly: true, 
        secure: false,  
        sameSite: 'strict',
        maxAge: 1000 * 60 * 60 
      }).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};