const userTypeDefs = `#graphql
  type User {
    _id: ID!
    username: String
    email: String
    projects: [Project]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    signUp(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    # TODO: updateProject instead of Critter Name
  }
`;

export default userTypeDefs;
