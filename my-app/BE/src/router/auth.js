import { Router } from "express";
import {
  Login
} from "../controller/auth.js";

const loginrouter = Router();

loginrouter
  .post("/",Login)
export { loginrouter };
