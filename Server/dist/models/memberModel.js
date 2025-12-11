import { Schema, model, Document } from "mongoose";
const memberSchema = new Schema({
    memberName: { type: String, required: true },
    memberImageKey: { type: String },
    memberBranch: { type: String, required: true },
    mail: { type: String },
    linkedin: { type: String },
});
export const memberModel = model("Member", memberSchema);
//# sourceMappingURL=memberModel.js.map