const taskTypeDefs = `#graphql
  type Task {
    _id: ID!
    projectId: String
    taskbody: String
    taskstate: Int
  }

  input InputTask {
    projectId: String
    taskbody: String
    taskstate: Int
  }

  input UpdateTask {
    taskId: String
    projectId: String
    taskstate: Int
  }

  input delTask {
    projectId: String!
    taskId: String!
  }

  type Query {
    tasks(input: String!): [Task]
  }

  type Mutation {
    createTask(input: InputTask!): User
    updateTask(input: UpdateTask!): User
    delTask(input: delTask!): User
  }
`;

export default taskTypeDefs;
