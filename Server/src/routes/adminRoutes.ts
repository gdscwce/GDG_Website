import express from "express"
import { Router } from "express"
import { adminSignup } from "../controllers/signupController.js";
import { adminLogin } from "../controllers/loginController.js";
const adminRouter = Router();

adminRouter.post('/signup', adminSignup);
adminRouter.post('/login', adminLogin);




export default adminRouter;
