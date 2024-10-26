import { Document, Schema, model, models } from "mongoose";

export interface IProject extends Document {
  _id: string;
  title: string;
  description?: string;
  createdAt: Date;
  fileUrl: string;
  owner: string;
}

const ProjectSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    fileUrl: { type: String, required: true },
    owner: { type: String }, // Change from ObjectId to String
  });
  

const Project = models.Project || model('Project', ProjectSchema);

export default Project;