import { Schema, model, Document } from "mongoose";

export interface IAdmin extends Document {
  email: string;
  Password: string; 
}

const AdminSchema = new Schema<IAdmin>(
  {
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
  }
);

export const adminModel = model<IAdmin>("Admin", AdminSchema);
