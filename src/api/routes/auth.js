const express = require('express')
const {
  register,
  login,
  updateUserRole,
  deleteUser
} = require('../controllers/auth')
const { isAuth } = require('../../middlewares/auth')
const { isAdmin } = require('../../middlewares/isAdmin')

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.put('/role/:id', isAuth, isAdmin, updateUserRole)
router.delete('/:id', isAuth, isAdmin, deleteUser)

module.exports = router
