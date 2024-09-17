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
  .get("/:id",Checktoken,getUser)
  .get("/", Checktoken,CheckRole,getUsers)
  .put("/update/:id",updateUser)
  .get("/users", getUsers)
  .delete("/:id/delete", deleteUser)

  
export { userRouter };