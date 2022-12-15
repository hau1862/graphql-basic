const { gql } = require("apollo-server-express");

// type definition
const typeDefs = gql`
  type Movie {
    id: ID
    name: String
    genre: String
    author: Author
  }

  type Author {
    id: ID
    name: String
    age: Int
    movies: [Movie]
  }

  # ROOT TYPE
  type Query {
    movies: [Movie]
    movie(id: ID!): Movie
    authors: [Author]
    author(id: ID!): Author
  }

  type Mutation {
    createAuthor(name: String, age: Int): Author
    createMovie(name: String, genre: String, authorId: ID!): Movie
  }
`;

module.exports = typeDefs;
