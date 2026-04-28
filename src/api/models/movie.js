const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: 'users' },
    category: { type: mongoose.Types.ObjectId, ref: 'categories' },
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
