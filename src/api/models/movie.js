const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    year: { type: Number },
    img: { type: String }
  },
  {
    timestamps: true
  }
)

const Movie = mongoose.model('movies', movieSchema)

module.exports = Movie
