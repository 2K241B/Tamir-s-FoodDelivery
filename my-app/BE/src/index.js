import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    return res.status(200).json("hello world");
});

app.listen(PORT, () => {
    console.log("listening on port " + PORT);
});
