import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import adminRouter from "./routes/adminRoutes.js";
const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
dotenv.config();
app.use(express.json());
// Routes
app.use("/admin", adminRouter);
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