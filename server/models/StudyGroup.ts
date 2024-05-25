import { Document, Schema, model } from "mongoose";

export interface IStudyGroup extends Document {
  creatorId: string;
  subject: string;
  time: Date;
  address: string;
  participants: Schema.Types.ObjectId[];
}

const studyGroupSchema = new Schema<IStudyGroup>({
  creatorId: { type: String, required: true },
  subject: { type: String, required: true },
  time: { type: Date, required: true },
  address: { type: String, required: true },
  participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const StudyGroup = model<IStudyGroup>("StudyGroup", studyGroupSchema);

export default StudyGroup;
