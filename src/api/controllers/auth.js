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

module.exports = { register, login }
