const Author = require("../models/Author");
const Movie = require("../models/Movie");

const sampleAuthor = {
  name: "",
  age: 0
};

const sampleMovie = {
  name: "",
  genre: "",
  authorId: ""
};

async function getAllMovies(condition = {}) {
  return await Movie.find(condition);
}

async function getAllAuthors(condition = {}) {
  return await Author.find(condition);
}

async function createMovie(args) {
  const newMovie = new Movie({ ...sampleMovie, ...args });
  return await newMovie.save();
}

async function createAuthor(args) {
  const newAuthor = new Author({ ...sampleAuthor, ...args });
  return await newAuthor.save();
}

async function getMovieById(id) {
  return await Movie.findById(id);
}

async function getAuthorById(id) {
  return await Author.findById(id);
}

module.exports = {
  getAllMovies, getAllAuthors, createMovie, createAuthor, getMovieById, getAuthorById
};
