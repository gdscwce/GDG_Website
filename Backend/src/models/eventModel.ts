import { Schema, model, Document } from "mongoose";

export interface IEvent extends Document {
  eventName: string;
  eventInfo: string;
  eventDate: Date;
  eventImagesKey: string[];
}

const eventSchema = new Schema<IEvent>({
  eventName: { type: String, required: true },
  eventInfo: { type: String, required: true },
  eventDate: { type: Date, required: true },
  eventImagesKey: [{ type: String }],
});

export const eventModel = model<IEvent>("Event", eventSchema);
