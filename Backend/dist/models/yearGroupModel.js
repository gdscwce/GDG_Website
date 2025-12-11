import { Schema, model, Types, Document } from "mongoose";
const YearGroupSchema = new Schema({
    year: { type: String, required: true },
    events: [{ type: Schema.Types.ObjectId, ref: "Event" }],
    members: [{ type: Schema.Types.ObjectId, ref: "Member" }],
});
export const yearGroupModel = model("YearGroup", YearGroupSchema);
//# sourceMappingURL=yearGroupModel.js.map