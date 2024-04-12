import Project from "../../models/project.js";
// import User from "../../models/user.js";
import Task from "../../models/task.js";

const projectResolvers = {
  Query: {
    projects: async (_, __, context) => {
      try {
        if (!context.getUser()) throw new Error("Unauthorized");
        const userId = await context.getUser()._id;

        const projects = await Project.find({ userId });
        return projects;
      } catch (err) {
        console.error("Error getting projects: ", err);
        throw new Error("Error getting projects");
      }
    },
    //formerly returnProject
    project: async (_, { projectId }) => {
      try {
        const project = await Project.findById(projectId);
        return project;
      } catch (err) {
        console.error("Error getting project: ", err);
        throw new Error("Error getting project.");
      }
    },
  },

  Mutation: {
    createProject: async (_, { input }, context) => {
      try {
        const newProject = new Project({
          ...input,
          userId: context.getUser()._id,
        });
        await newProject.save();
        return newProject;
      } catch (err) {
        console.error("Error creating project: ", err);
        throw new Error("Error creating project.");
      }
    },
    updateProject: async (_, { input }) => {
      try {
        const updatedProject = await Project.findByIdAndUpdate(
          input.projectId,
          input,
          {
            new: true,
          }
        );
        return updatedProject;
      } catch (err) {
        console.error("Error updating project: ", err);
        throw new Error("Error updating project.");
      }
    },
    deleteProject: async (_, { projectId }) => {
      try {
        const deletedProject = await Project.findByIdAndDelete(projectId);
        return deletedProject;
      } catch (err) {
        console.error("Error deleting project: ", err);
        throw new Error("Error deleting project.");
      }
    },
  },
  Project: {
    // user: async (parent) => {
    //   const userId = parent.userId;
    //   try {
    //     const user = await User.findById(userId);
    //     return user;
    //   } catch (err) {
    //     console.error("Error getting user: ", err);
    //     throw new Error("Error getting user.");
    //   }
    // },
    tasks: async (parent) => {
      try {
        const tasks = await Task.find({ projectId: parent._id });
        return tasks;
      } catch (err) {
        console.log("Error in getting project tasks: ", err);
        throw new Error(err.message || "Internal server error");
      }
    },
  },
};

export default projectResolvers;
