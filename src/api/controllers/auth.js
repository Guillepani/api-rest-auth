const User = require('../models/user')
const bcrypt = require('bcrypt')

const register = async (req, res) => {
  try {
    const newUser = new User(req.body)

    const salt = 10
    newUser.password = bcrypt.hashSync(newUser.password, salt)

    const userSaved = await newUser.save()

    return res.status(201).json(userSaved)
  } catch (error) {
    return res.status(400).json('Error en registro')
  }
}

module.exports = { register }
