const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Author schema support mongoose interact with mongodb
const AuthorSchema = {
  name: {
    type: String
  },
  age: {
    type: Number
  }
};

module.exports = mongoose.model("authors", AuthorSchema);
