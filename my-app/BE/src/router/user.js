import { Router } from "express";
import {
  createUser,
  getUser,
  getUsers,
  deleteUser,
  updateUser
} from "../controller/user.js";
import Checktoken from "../middleware/checktoken.js";
import CheckRole from "../middleware/checkrole.js";

const userRouter = Router();

userRouter
  .post("/create", createUser)
  .get("/", Checktoken,CheckRole,getUsers)
  .get("/users", getUsers)
  .delete("/:id/delete", deleteUser)
  .put("/update/:id",updateUser)
  .get("/:id",Checktoken,getUser)

  
export { userRouter };