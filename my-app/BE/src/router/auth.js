import { Router } from "express";
import {
  Login
} from "../controller/auth.js";

const loginrouter = Router();

loginrouter
  .post("/login",Login)
export { loginrouter };
