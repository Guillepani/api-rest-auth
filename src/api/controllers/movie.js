const Movie = require('../models/movie')
const { cloudinary } = require('../../config/cloudinary')

const createMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body)

    if (req.file) {
      newMovie.img = req.file.path
    }

    const movieSaved = await newMovie.save()

    return res.status(201).json(movieSaved)
  } catch (error) {
    console.log(error)
    return res.status(400).json('Error al crear movie')
  }
}

const deleteMovie = async (req, res) => {
  console.log('DELETE HIT')
  try {
    const { id } = req.params

    const movieDeleted = await Movie.findByIdAndDelete(id)

    if (!movieDeleted) {
      return res.status(404).json('Movie no encontrada')
    }

    if (movieDeleted.img) {
      const imgUrl = movieDeleted.img
      const imgName = imgUrl.split('/').pop().split('.')[0]

      await cloudinary.uploader.destroy(`api-rest-files/${imgName}`)
    }

    return res.status(200).json(movieDeleted)
  } catch (error) {
    console.log(error)
    return res.status(400).json('Error al borrar movie')
  }
}

module.exports = { createMovie, deleteMovie }
