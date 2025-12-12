import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
// const db_uri = process.env.MONGO_URI;
// const mongoconnect = async () => {
//     try {
//         await mongoose.connect(db_uri)
//         console.log('Connected to MongoDB successfully!')
//     } catch (err) {
//         console.error('Error connecting to MongoDB:', err)
//     }
// }
// mongoconnect();
app.listen(PORT, () => {
    console.log("server running on port: " + PORT);
});
app.get('/', (req, res) => {
    res.send("<h1> hii</h1>");
});
//# sourceMappingURL=index.js.map