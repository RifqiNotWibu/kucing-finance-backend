const bcrypt = require("bcrypt");
const salt = bcrypt.genSalt(10);

const hashPassword = (payload) => {
  console.log(payload);
  return bcrypt.hashSync(payload, salt);
};

const comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

module.exports = {
  hashPassword,
  comparePassword,
};
