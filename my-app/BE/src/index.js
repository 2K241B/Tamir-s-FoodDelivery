import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { Connect } from "./utils/db.js";
import { userRouter } from "./router/user.js";
import { loginrouter } from "./router/auth.js";
import { sendMail } from "./controller/mail.js";
import {getmail} from "./controller/checkmail.js"

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use("/user", userRouter);
app.use("/auth", loginrouter); 
app.get("/mail",sendMail)
app.get("/checkmail",getmail)

app.get("/", (_, res) => {
    return res.status(200).json('hello world');
});

app.listen(PORT, () => {
    Connect(process.env.MONGODB_URI);
    console.log("listening on port " + PORT);
});
