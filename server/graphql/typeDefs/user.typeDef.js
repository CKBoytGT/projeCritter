const userTypeDefs = `#graphql
  type User {
    _id: ID!
    username: String!
    email: String!
    projects: [Project]
  }

  type Query {
    authUser: User
    user: User
  }

  type Mutation {
    signUp(input: SignUpInput!): User
    login(input: LoginInput!): User
    logout: LogoutResponse
  }

  input SignUpInput {
    username: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type LogoutResponse {
    message: String!
  }
`;

export default userTypeDefs;
