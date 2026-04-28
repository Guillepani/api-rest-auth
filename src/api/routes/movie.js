const express = require('express')
const { createMovie } = require('../controllers/movie')
const { upload } = require('../../middlewares/file')

const router = express.Router()

router.post('/', upload.single('img'), createMovie)

module.exports = router
