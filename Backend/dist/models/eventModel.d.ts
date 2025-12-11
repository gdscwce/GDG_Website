import { Document } from "mongoose";
export interface IEvent extends Document {
    eventName: string;
    eventInfo: string;
    eventDate: Date;
    eventImagesKey: string[];
}
export declare const eventModel: import("mongoose").Model<IEvent, {}, {}, {}, Document<unknown, {}, IEvent, {}, import("mongoose").DefaultSchemaOptions> & IEvent & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any, IEvent>;
//# sourceMappingURL=eventModel.d.ts.map