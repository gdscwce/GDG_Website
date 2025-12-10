import { Document } from "mongoose";
export interface IMember extends Document {
    memberName: string;
    memberImageKey: string;
    memberBranch: string;
    mail: string;
    linkedin: string;
}
export declare const memberModel: import("mongoose").Model<IMember, {}, {}, {}, Document<unknown, {}, IMember, {}, import("mongoose").DefaultSchemaOptions> & IMember & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any, IMember>;
//# sourceMappingURL=memberModel.d.ts.map