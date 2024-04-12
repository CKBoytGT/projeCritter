const taskTypeDefs = `#graphql
  type Task {
    _id: ID!
    projectId: ID!
    taskbody: String!
    taskstate: String!
  }

  type Query {
    tasks: [Task!]
    task(taskId:ID!): Task
  }

  type Mutation {
    createTask(input: CreateTask!): Task!
    updateTask(input: UpdateTask!): Task!
    deleteTask(taskId:ID!): Task!
  }

  input CreateTask {
    _id: ID!
    projectId: ID!
    taskbody: String!
    taskstate: String!
  }

  input UpdateTask {
    _id: ID!
    taskbody: String
    taskstate: String
  }
`;

export default taskTypeDefs;
