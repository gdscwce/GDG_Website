import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { adminSignup } from "./controllers/signupController.js";
import { adminLogin } from "./controllers/loginController.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.post('/api/login', adminLogin);
app.post('/api/signup', adminSignup);
app.use(express.json());
const db_uri = process.env.MONGO_URI;
const mongoconnect = async () => {
    try {
        await mongoose.connect(db_uri);
        console.log('Connected to MongoDB successfully!');
    }
    catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};
mongoconnect();
app.listen(PORT, () => {
    console.log("server running on port: " + PORT);
});
//# sourceMappingURL=index.js.map