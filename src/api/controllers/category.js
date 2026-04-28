const Category = require('../models/category')

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find()
    return res.status(200).json(categories)
  } catch (error) {
    return res.status(400).json('Error al obtener categories')
  }
}

const createCategory = async (req, res) => {
  try {
    const newCategory = new Category(req.body)
    const categorySaved = await newCategory.save()
    return res.status(201).json(categorySaved)
  } catch (error) {
    return res.status(400).json('Error al crear category')
  }
}

module.exports = { getCategories, createCategory }
