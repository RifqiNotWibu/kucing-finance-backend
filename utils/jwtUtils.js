const jwt = require('jsonwebtoken')

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.TOKEN_KEY, {
    expiresIn: process.env.TOKEN_EXPIRE,
  })
}

const verifyToken = (token) => {
  return jwt.verify(token, process.env.TOKEN_KEY)
}

const refreshToken = (token) => {
  let payload = verifyToken(token)
  return jwt.sign(
    {
      phoneNumber: payload.phoneNumber,
      email: payload.email,
      name: payload.name,
      is_verified: payload.is_verified,
      is_registered: payload.is_registered,
    },
    process.env.TOKEN_KEY,
    {
      expiresIn: process.env.TOKEN_EXPIRE,
    }
  )
}
module.exports = { generateToken, verifyToken, refreshToken }
