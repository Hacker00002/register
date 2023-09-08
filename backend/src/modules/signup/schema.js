const { gql } = require("apollo-server-express");

module.exports = gql`
  type Users {
    user_id: ID!
    user_name: String!
    user_email: String!
    user_password: String!
  }

  extend type Query {
    users: [Users]!
  }

  extend type Mutation {
    signUp(
      user_name: String!
      user_email: String!
      user_password: String!
    ): Auth
  }
`;
