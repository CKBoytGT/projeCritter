import Project from "../../models/project.js";
import Task from "../../models/task.js";

//TODO: add more auth to this and other resolvers

const projectResolvers = {
  Query: {
    projects: async (_, __, context) => {
      // do nothing if user is not logged in
      if (!context.getUser()) return;

      try {
        const userId = await context.getUser()._id;

        const projects = await Project.find({ userId });
        return projects;
      } catch (err) {
        console.error("Error getting projects: ", err);
        throw new Error("Error getting projects");
      }
    },
    project: async (_, { projectId }) => {
      try {
        const project = await Project.findById(projectId);
        return project;
      } catch (err) {
        console.error("Error getting project: ", err);
        throw new Error("Error getting project.");
      }
    },
    critterMood: async (_, { projectId }) => {
      // TODO: check if completed column has any tasks before changing to joyful mood; if all columns empty, should be content
      try {
        const tasks = await Task.find({ projectId });

        let moodVal = 0;
        tasks.forEach((task) => {
          if (task.taskState === "Backlog") {
            moodVal += 0.05;
          } else if (task.taskState === "Ready") {
            moodVal += 0.2;
          } else if (task.taskState === "In Progress") {
            moodVal++;
          }
        });

        let moodString = "";
        if (moodVal <= 0) {
          moodString = "Happy";
        } else if (moodVal <= 2.5) {
          moodString = "Chipper";
        } else if (moodVal <= 5) {
          moodString = "Content";
        } else if (moodVal <= 7.5) {
          moodString = "Nervous";
        } else if (moodVal <= 8.75) {
          moodString = "Stressed";
        } else if (moodVal <= 10) {
          moodString = "Panicking";
        } else {
          moodString = "Wiped-Out";
        }

        return { mood: moodString };
      } catch (err) {
        console.error("Error getting critter mood: ", err);
        throw new Error("Error getting critter mood.");
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
          input._id,
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
        await Task.deleteMany({ projectId }); // delete tasks along with project
        return deletedProject;
      } catch (err) {
        console.error("Error deleting project: ", err);
        throw new Error("Error deleting project.");
      }
    },
  },
  Project: {
    tasks: async (parent) => {
      try {
        const tasks = await Task.find({ projectId: parent._id });
        return tasks;
      } catch (err) {
        console.log("Error in getting project tasks: ", err);
        throw new Error(err.message || "Internal server error.");
      }
    },
  },
};

export default projectResolvers;
