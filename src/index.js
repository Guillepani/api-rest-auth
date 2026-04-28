require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')

const authRoutes = require('./api/routes/auth')

connectDB()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1/auth', authRoutes)

app.get('/', (req, res) => {
  res.send('API funcionando correctamente')
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
