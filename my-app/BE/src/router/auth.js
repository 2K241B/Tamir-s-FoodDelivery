import { Router } from "express";
import {
  createUser,
  getUser,
  getUsers,
  deleteUser,
} from "../controller/auth.js";

const userRouter = Router();

userRouter
  .post("/create", createUser)
  .get("/:id", getUser)
  .get("/users", getUsers)
  .delete("/:id/delete", deleteUser);

export { userRouter };
