const bcrypt = require("bcrypt");
const salt = bcrypt.genSalt(process.env.SALT_BCRYPT);

const hashPassword = (payload) => {
  return bcrypt.hashSync(payload, salt);
};

const comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

module.exports = {
  hashPassword,
  comparePassword,
};
