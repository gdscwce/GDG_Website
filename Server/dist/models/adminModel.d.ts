import { Document } from "mongoose";
export interface IAdmin extends Document {
    email: string;
    password: string;
}
export declare const adminModel: import("mongoose").Model<IAdmin, {}, {}, {}, Document<unknown, {}, IAdmin, {}, import("mongoose").DefaultSchemaOptions> & IAdmin & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any, IAdmin>;
//# sourceMappingURL=adminModel.d.ts.map