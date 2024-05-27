import { Schema, model } from "mongoose";
const studyGroupSchema = new Schema({
    creatorId: { type: Schema.Types.ObjectId, ref: "User" },
    subject: { type: String, required: true },
    time: { type: String, required: true },
    address: { type: String, required: true },
    participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
});
const StudyGroup = model("StudyGroup", studyGroupSchema);
export default StudyGroup;
