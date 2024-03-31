import { DateTypeDefinition } from "graphql-scalars";

const projectTypeDefs = `#graphql
  ${DateTypeDefinition}

  type Project {
    _id: ID!
    title: String!
    critterName: String!
    projectstatus: String
    tasks: [Task]
    createdAt: Date
  }

  input InputProject {
    title: String
    projectstatus: String
  }

  # input CritterName {
  #   critterName: String!
  #   projectId: String!
  # }

  type Query {
    project(input: String!): Project
  }

  type Mutation {
    createProject(input: InputProject!): User
    delProject(input: String!): User
    # updateCritterName(input: CritterName!): User
  }
`;

export default projectTypeDefs;
