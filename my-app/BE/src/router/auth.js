import { Router } from "express";
import {
  createUser,
  getUser,
  getUsers,
  deleteUser,
  updateUser
} from "../controller/auth.js";

const userRouter = Router();

userRouter
  .post("/create", createUser)
  .get("/:id", getUser)
  .get("/", getUsers)
  .delete("/:id/delete", deleteUser)
  .put("/:id/update",updateUser)

export { userRouter };
