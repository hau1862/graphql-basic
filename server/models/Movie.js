const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Movie schema support mongoose interact with mongodb
const MovieSchema = {
  name: {
    type: String
  },
  genre: {
    type: String
  },
  authorId: {
    type: String
  }
};

module.exports = mongoose.model("movies", MovieSchema);
