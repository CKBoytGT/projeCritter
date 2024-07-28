import { DateTypeDefinition } from "graphql-scalars";

const projectTypeDefs = `#graphql
  ${DateTypeDefinition}

  type Project {
    _id: ID!
    userId: ID!
    projectName: String!
    critterName: String!
    critterSpecies: String!
    tasks: [Task!]
    createdAt: Date
  }

  type Query {
    projects: [Project!]
    project(projectId:ID!): Project
    critterMood(projectId:ID!): CritterMood!
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project!
    updateProject(input: UpdateProjectInput!): Project!
    deleteProject(projectId: ID!): Project!
  }

  type CritterMood {
    mood: String!
  }

  input CreateProjectInput {
    userId: ID!
    projectName: String!
    critterName: String!
    critterSpecies: String!
  }

  input UpdateProjectInput {
    _id: ID!
    projectName: String
    critterName: String
    critterSpecies: String
  }
`;

export default projectTypeDefs;
