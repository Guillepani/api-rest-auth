const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
  try {
    const newUser = new User(req.body)

    newUser.role = 'user'

    const salt = 10
    newUser.password = bcrypt.hashSync(newUser.password, salt)

    const userSaved = await newUser.save()

    return res.status(201).json(userSaved)
  } catch (error) {
    return res.status(400).json('Error en registro')
  }
}

const login = async (req, res) => {
  try {
    const { username, password } = req.body

    const user = await User.findOne({ username })

    if (!user) {
      return res.status(400).json('Usuario no encontrado')
    }

    const isMatch = bcrypt.compareSync(password, user.password)

    if (!isMatch) {
      return res.status(400).json('Password incorrecta')
    }

    const token = jwt.sign({ id: user._id, role: user.role }, 'secreto', {
      expiresIn: '1h'
    })

    return res.status(200).json({ token })
  } catch (error) {
    return res.status(400).json('Error en login')
  }
}

const updateUserRole = async (req, res) => {
  try {
    const { id } = req.params
    const { role } = req.body

    const userUpdated = await User.findByIdAndUpdate(
      id,
      { role },
      { new: true }
    )

    return res.status(200).json(userUpdated)
  } catch (error) {
    return res.status(400).json('Error al actualizar rol')
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params

    // si no es admin, solo puede borrarse a si mismo
    if (req.user.role !== 'admin' && req.user.id !== id) {
      return res.status(403).json('No tienes permisos')
    }

    const userDeleted = await User.findByIdAndDelete(id)

    if (!userDeleted) {
      return res.status(404).json('Usuario no encontrado')
    }

    return res.status(200).json(userDeleted)
  } catch (error) {
    return res.status(400).json('Error al eliminar usuario')
  }
}

module.exports = { register, login, updateUserRole, deleteUser }
