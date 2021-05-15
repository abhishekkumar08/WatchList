const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  genre: {
    type: String,
  },
  movieId: {
    type: String,
  },
});

module.exports = mongoose.model('Movie', MovieSchema);