const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  genre: {
    type: String,
    require: true,
  },
  
});

module.exports = mongoose.model('Movie', MovieSchema);