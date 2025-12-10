import { Schema, model, Document } from "mongoose";
const eventSchema = new Schema({
    eventName: { type: String, required: true },
    eventInfo: { type: String, required: true },
    eventDate: { type: Date, required: true },
    eventImagesKey: [{ type: String }],
});
export const eventModel = model("Event", eventSchema);
//# sourceMappingURL=eventModel.js.map