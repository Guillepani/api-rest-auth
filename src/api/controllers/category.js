const Category = require('../models/category')
const mongoose = require('mongoose')

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

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json('ID no válido')
    }

    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true
    })

    return res.status(200).json(updatedCategory)
  } catch (error) {
    return res.status(400).json('Error al actualizar category')
  }
}

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json('ID no válido')
    }

    await Category.findByIdAndDelete(id)

    return res.status(200).json('Category eliminada')
  } catch (error) {
    return res.status(400).json('Error al eliminar category')
  }
}

module.exports = {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory
}
