import { userModel } from "../schema/user.js";

export const getmail = async (req, res) => {
    try {
      const response = await userModel.find({},'email'); 
      res.send(response); 
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
