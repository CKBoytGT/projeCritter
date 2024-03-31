import { mergeResolvers } from "@graphql-tools/merge";

import userResolvers from "./user.resolver.js";
import projectResolvers from "./project.resolver.js";
// import taskResolvers from "./task.resolver.js";

const mergedResolvers = mergeResolvers([
  userResolvers,
  projectResolvers,
  // taskResolvers,
]);

export default mergedResolvers;
