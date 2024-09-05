import { Router} from "express";
import { createUser, getUser ,getUsers } from "../controller/auth.js";

const userRouter = Router();

userRouter.post("/create", createUser).get("/:id", getUser).get("/get",getUsers);

export { userRouter };