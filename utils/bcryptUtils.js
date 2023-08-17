const bcrypt = require('bcrypt')

const hashPassword = (payload) => {
  return bcrypt.hashSync(payload, 10)
}

const comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword)
}

module.exports = {
  hashPassword,
  comparePassword,
}
