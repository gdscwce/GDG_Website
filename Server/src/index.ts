import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"
import adminRouter from "./routes/adminRoutes.js";
import commonGetRouter from "./routes/commongetRoutes.js";
import healthcheaker from "./controllers/healtController.js";
const app = express();
const PORT = process.env.PORT? parseInt(process.env.PORT) : 3000;
dotenv.config();

app.use(cors());
app.use(express.json());




// Routes

app.use("/admin", adminRouter);
app.use("/public", commonGetRouter);

//health route
app.get("/health",healthcheaker);




const db_uri = process.env.MONGO_URI;
const mongoconnect = async () => {

    try {
        await mongoose.connect(db_uri)
        console.log('Connected to MongoDB successfully!')
    } catch (err) {
        console.error('Error connecting to MongoDB:', err)
    }
}

mongoconnect();


app.listen(PORT,"0.0.0.0", () => {
    console.log("server running on port: " + PORT);
})