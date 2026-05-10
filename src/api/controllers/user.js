const User = require('../models/user')
const mongoose = require('mongoose')

const getUsers = async (req, res) => {
  try {
    const users = await User.find()

    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json('Error al obtener usuarios')
  }
}

const getUserById = async (req, res) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json('ID no válido')
    }

    const user = await User.findById(id)

    if (!user) {
      return res.status(404).json('Usuario no encontrado')
    }

    return res.status(200).json(user)
  } catch (error) {
    return res.status(400).json('Error al obtener usuario')
  }
}

module.exports = {
  getUsers,
  getUserById
}
