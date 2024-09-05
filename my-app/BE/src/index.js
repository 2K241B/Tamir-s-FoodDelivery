import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { Connect } from "./utils/db.js";
import { userRouter } from "./router/auth.js";

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/user", userRouter);

app.get("/", (_, res) => {
    return res.status(200).json('hello world');
})

app.listen(PORT, () => {
    Connect(process.env.MONGODB_URI);
    console.log("listening on port " + PORT);
  });