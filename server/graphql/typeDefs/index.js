import { mergeTypeDefs } from "@graphql-tools/merge";

import userTypeDefs from "./user.typeDef.js";
import projectTypeDefs from "./project.typeDef.js";
import taskTypeDefs from "./task.typeDef.js";

const mergedTypeDefs = mergeTypeDefs([
  userTypeDefs,
  projectTypeDefs,
  taskTypeDefs,
]);

export default mergedTypeDefs;
