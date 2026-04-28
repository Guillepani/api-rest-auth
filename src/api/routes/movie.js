const express = require('express')
const { createMovie, getMovies, deleteMovie } = require('../controllers/movie')
const { upload } = require('../../middlewares/file')

const router = express.Router()

router.get('/', getMovies)
router.post('/', upload.single('img'), createMovie)
router.delete('/:id', deleteMovie)

module.exports = router
