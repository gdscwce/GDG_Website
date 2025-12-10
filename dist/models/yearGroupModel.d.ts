import { Types, Document } from "mongoose";
export interface IYearGroup extends Document {
    year: string;
    events: Types.ObjectId[];
    members: Types.ObjectId[];
}
export declare const yearGroupModel: import("mongoose").Model<IYearGroup, {}, {}, {}, Document<unknown, {}, IYearGroup, {}, import("mongoose").DefaultSchemaOptions> & IYearGroup & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any, IYearGroup>;
//# sourceMappingURL=yearGroupModel.d.ts.map