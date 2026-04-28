const express = require('express')
const {
  createMovie,
  getMovies,
  updateMovie,
  deleteMovie
} = require('../controllers/movie')
const { upload } = require('../../middlewares/file')
const { isAuth } = require('../../middlewares/auth')

const router = express.Router()

router.get('/', getMovies)
router.post('/', isAuth, upload.single('img'), createMovie)
router.put('/:id', isAuth, updateMovie)
router.delete('/:id', isAuth, deleteMovie)

module.exports = router
