import { gql } from "@apollo/client";

const getAllMovies = gql`
  query getAllMovies{
    movies {
      id
      name
      genre
      author {
        name
      }
    }
  }
`;

const getMovieById = gql`
  query getMovieById ($id: ID!) {
    movie (id: $id) {
      id
      name
      genre
      author {
        name
      }
    }
  }
`;

export {
  getAllMovies, getMovieById
};
