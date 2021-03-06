const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  genre: {
    type: String,
  },
  genreId: {
    type: String,
  },
});

module.exports = mongoose.model("Genre", GenreSchema);
