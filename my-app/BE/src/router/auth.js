import { Router} from "express";
import { createUser, getUser } from "../controller/auth.js";

const userRouter = Router();

userRouter.post("/create", createUser).get("/:id", getUser);

export { userRouter };