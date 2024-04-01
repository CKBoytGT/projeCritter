import { DateTypeDefinition } from "graphql-scalars";

const projectTypeDefs = `#graphql
  ${DateTypeDefinition}

  type Project {
    _id: ID!
    title: String!
    critterName: String!
    critterSpecies: String!
    # projectstatus: String
    tasks: [Task]
    createdAt: Date
  }

  #formerly InputProject
  input CreateProjectInput {
    title: String!
    critterName: String!
    critterSpecies: String!
    # projectstatus: String
  }

  input UpdateProjectInput {
    _id: ID!
    title: String
    critterName: String
    critterSpecies: String
  }

  # input CritterName {
  #   critterName: String!
  #   projectId: String!
  # }

  type Query {
    project(input: String!): Project
  }

  type Mutation {
    createProject(input: CreateProjectInput!): User
    updateProject(input: UpdateProjectInput!): User
    delProject(input: String!): User
    # updateCritterName(input: CritterName!): User
  }
`;

export default projectTypeDefs;
