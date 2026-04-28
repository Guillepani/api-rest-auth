const Movie = require('../models/movie')

const createMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body)

    if (req.file) {
      newMovie.img = req.file.path
    }

    const movieSaved = await newMovie.save()

    return res.status(201).json(movieSaved)
  } catch (error) {
    return res.status(400).json('Error al crear movie')
  }
}

module.exports = { createMovie }
