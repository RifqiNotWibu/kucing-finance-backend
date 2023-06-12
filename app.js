const express = require('express')
const router = require('./routers')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

require('dotenv').config()

allowedOrigin = 'http://localhost:3001'
app.use(
  cors({
    origin: allowedOrigin,
  })
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router)

var port = process.env.PORT

app.listen(port, '0.0.0.0', () => {
  console.log('server has started on port ' + port)
})
