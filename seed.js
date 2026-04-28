const mongoose = require('mongoose')
require('dotenv').config()

const Movie = require('./src/api/models/movie')
const Category = require('./src/api/models/category')

const movies = [
  { title: 'Batman', year: 2022 },
  { title: 'Superman', year: 2020 }
]

const categories = [{ name: 'Action' }, { name: 'Adventure' }]

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)

    await Movie.deleteMany()
    await Category.deleteMany()

    const createdCategories = await Category.insertMany(categories)

    const moviesWithCategory = movies.map((movie) => ({
      ...movie,
      category: createdCategories[0]._id
    }))

    await Movie.insertMany(moviesWithCategory)

    console.log('Seed ejecutado correctamente')
    process.exit()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

seed()
