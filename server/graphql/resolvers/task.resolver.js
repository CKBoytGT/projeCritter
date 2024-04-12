import Task from "../../models/task.js";
import Project from "../../models/project.js";
import User from "../../models/user.js";

const taskResolvers = {
  Query: {
    tasks: async (_, { projectId }, context) => {
      try {
        if (!context.getUser()) throw new Error("Unauthorized");

        const tasks = await Task.find({ projectId });
        return tasks;
      } catch (err) {
        console.error("Error getting tasks: ", err);
        throw new Error("Error getting tasks.");
      }
    },
    task: async (_, { taskId }) => {
      try {
        const task = Task.findById(taskId);
        return task;
      } catch (err) {
        console.error("Error getting task: ", err);
        throw new Error("Error getting task.");
      }
    },
  },

  Mutation: {
    createTask: async (_, { input }) => {
      try {
        const newTask = new Task({
          ...input,
        });
        await newTask.save();
        return newTask;
      } catch (err) {
        console.error("Error creating task: ", err);
        throw new Error("Error creating task.");
      }
    },
    updateTask: async (_, { input }) => {
      try {
        const updatedTask = await Task.findByIdAndUpdate(input.taskId, input, {
          new: true,
        });
        return updatedTask;
      } catch (err) {
        console.error("Error updating task: ", err);
        throw new Error("Error updating task.");
      }
    },
    deleteTask: async (_, { taskId }) => {
      try {
        const deletedTask = await Project.findByIdAndDelete(taskId);
        return deletedTask;
      } catch (err) {
        console.error("Error deleting task: ", err);
        throw new Error("Error deleting task.");
      }
    },
  },
};

export default taskResolvers;