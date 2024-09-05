import { userModel } from "../schema/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send("Email and password are required");
        }
        const response = await userModel.findOne({ email });

        if (!response) {
            return res.status(404).send("User not found");
        }
        bcrypt.compare(password, response.password, function (err, result) {
            if (err) {
                return res.status(500).send("Error comparing passwords");
            }

            if (result) {
                const privateKey = '123'; 
                const token = jwt.sign({ id: response._id, email: response.email }, privateKey, {
                    expiresIn: '1h'
                });

                return res.send({ token });
            } else {
                return res.status(401).send('Incorrect password');
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}



