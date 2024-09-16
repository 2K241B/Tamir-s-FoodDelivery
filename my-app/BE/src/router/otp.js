import { Router } from 'express';
import { Check, createOTP } from '../controller/otp.js';

const otp = Router();

otp.post('/create', createOTP);
otp.post('/check', Check);  

export default otp;
