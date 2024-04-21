const taskTypeDefs = `#graphql
  type Task {
    _id: ID!
    projectId: ID!
    taskBody: String!
    taskState: String!
  }

  type Query {
    tasks(projectID:ID!): [Task!]
    task(taskId:ID!): Task
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task!
    updateTask(input: UpdateTaskInput!): Task!
    deleteTask(taskId:ID!): Task!
  }

  input CreateTaskInput {
    projectId: ID!
    taskBody: String!
    taskState: String!
  }

  input UpdateTaskInput {
    _id: ID!
    taskBody: String
    taskState: String
  }
`;

export default taskTypeDefs;
