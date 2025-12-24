import express from "express"
import { adminSignup } from "../controllers/signupController.js";
import { adminLogin } from "../controllers/loginController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { addYearGroup, deleteYearGroup, editYearGroup } from "../controllers/yearControllers.js";
import { addEvent, deleteEvent, editEvent } from "../controllers/eventControllers.js";
import { addMembers, deleteMember, editMember } from "../controllers/memberControllers.js";
const adminRouter = express.Router();

adminRouter.post('/signup', adminSignup);
adminRouter.post('/login', adminLogin);

// year group routes
adminRouter.post('/addyear',authMiddleware,addYearGroup);
adminRouter.post('/edityear/:id',authMiddleware,editYearGroup);
adminRouter.post('/deleteyear/:id',authMiddleware,deleteYearGroup);

//event routes

adminRouter.post('/addevent',authMiddleware,addEvent);
adminRouter.post('/editevent/:id',authMiddleware,editEvent);
adminRouter.post('/deleteevent/:id',authMiddleware,deleteEvent);


// member routes

adminRouter.post('/addmembers',authMiddleware,addMembers);
adminRouter.post('/editmember/:id',authMiddleware,editMember);
adminRouter.post('/deletemember/:id',authMiddleware,deleteMember);





export default adminRouter;
