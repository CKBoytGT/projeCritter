const userTypeDefs = `#graphql
  type User {
    _id: ID!
    # formerly username
    name: String!
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
    # formerly username
    name: String!
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
