import { Router } from "express";
import {
  createUser,
  getUser,
  getUsers,
  deleteUser,
  updateUser
} from "../controller/user.js";

const userRouter = Router();

userRouter
  .post("/create", createUser)
  .get("/:id", getUser)
  .get("/", getUsers)
  .put("/:id/update",updateUser)
  .get("/users", getUsers)
  .delete("/:id/delete", deleteUser)
export { userRouter };