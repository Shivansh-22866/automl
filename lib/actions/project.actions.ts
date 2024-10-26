import { CreateProjectParams } from "@/types"
import { connectToDatabase } from "../database"
import { handleError } from "../utils"
import Project from "../database/models/project.model"

export async function createProject({ title, description, fileUrl, ownerId }: CreateProjectParams) {
    try {
      await connectToDatabase();
  
      const newProject = await Project.create({ title, description, fileUrl, ownerId });
      
      return JSON.parse(JSON.stringify(newProject));
    } catch (error) {
      handleError(error);
      throw new Error('Failed to create project');
    }
  }
  