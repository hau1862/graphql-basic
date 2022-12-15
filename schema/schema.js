const { gql } = require("apollo-server-express");

// type definition
const typeDefs = gql`
  type Book {
    id: ID
    name: String
    genre: String
  }

  # ROOT TYPE
  type Query {
    books: [Book]
  }
`;

module.exports = typeDefs;
