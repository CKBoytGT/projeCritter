import projectTypeDefs from "./project.typeDef.js";
import taskTypeDefs from "./task.typeDef.js";
import userTypeDefs from "./user.typeDef.js";
import { mergeTypeDefs } from "@graphql-tools/merge";

const mergedTypeDefs = mergeTypeDefs([
  userTypeDefs,
  projectTypeDefs,
  taskTypeDefs,
]);

export default mergedTypeDefs;
