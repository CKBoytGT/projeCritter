import projectResolvers from "./project.resolver.js";
import taskResolvers from "./task.resolver.js";
import userResolvers from "./user.resolver.js";
import { mergeResolvers } from "@graphql-tools/merge";

const mergedResolvers = mergeResolvers([
  userResolvers,
  projectResolvers,
  taskResolvers,
]);

export default mergedResolvers;
