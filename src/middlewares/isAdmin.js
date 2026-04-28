const isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json('No tienes permisos')
    }

    next()
  } catch (error) {
    return res.status(403).json('Error de permisos')
  }
}

module.exports = { isAdmin }
