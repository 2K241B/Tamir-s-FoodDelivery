import { userModel } from "../schema/user.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

export const createUser = async (req, res) => {
    const { email, name, password, phoneNumber, role } = req.body;
  
    try {
      const salt = await bcrypt.genSalt(saltRounds);
      const hash = await bcrypt.hash(password, salt);
  
      const response = await userModel.create({
        email,
        name,
        password: hash,
        phoneNumber,
        role,
      });
  
      res.status(200).send(response);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };


export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await userModel.findById(id);
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};