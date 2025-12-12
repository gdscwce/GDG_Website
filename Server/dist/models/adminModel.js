import { Schema, model, Document } from "mongoose";
const AdminSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    Password: {
        type: String,
        required: true,
        minlength: 6,
    },
});
export const adminModel = model("Admin", AdminSchema);
//# sourceMappingURL=adminModel.js.map