import { DateTypeDefinition } from "graphql-scalars";

const projectTypeDefs = `#graphql
  ${DateTypeDefinition}

  type Project {
    _id: ID!
    userId: ID!
    title: String!
    critterName: String!
    critterSpecies: String!
    # projectstatus: String
    tasks: [Task!]
    createdAt: Date
  }

  type Query {
    projects: [Project!]
    project(projectId:ID!): Project
  }

  type Mutation {
    # note: critter name mutation is now covered by updateProject
    createProject(input: CreateProjectInput!): Project!
    updateProject(input: UpdateProjectInput!): Project!
    deleteProject(projectId:ID!): Project!
  }

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
`;

export default projectTypeDefs;
