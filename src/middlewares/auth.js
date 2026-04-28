const jwt = require('jsonwebtoken')

const isAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization

    if (!token) {
      return res.status(401).json('No autorizado')
    }

    const parsedToken = token.replace('Bearer ', '')

    const validToken = jwt.verify(parsedToken, 'secreto')

    req.user = validToken

    next()
  } catch (error) {
    return res.status(401).json('Token inválido')
  }
}

module.exports = { isAuth }
