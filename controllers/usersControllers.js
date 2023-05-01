const { users } = require("../models");
const emailValidator = require("email-validator");

//SIGNUP
class userControllers {
  static async signUp(req, res, next) {
    try {
      const { username, email, password } = req.body;

      if (!emailValidator.validate(email)) {
        return res.status(400).json({ message: "Incorrect email format!" });
      }
      let findExistingEmail = await users.findOne({
        where: { email, isActive: 1 },
      });
      if (findExistingEmail) {
        return res.status(400).json({ message: "Email already exists!" });
      }

      let signUp = await users.create({
        username,
        email,
        password,
      });

      res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
      next(err);
    }
  }

  static async updateUser(req, res, next) {
    try {
      const { username, password } = req.body;
      let updateUser = await users.update(
        {
          username: username,
          password: password,
        },
        {
          where: { id: req.params.userId, isActive: 1 },
        }
      );

      res.status(200).json({ message: "User updated succesfully" });
    } catch (err) {
      next(err);
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const { password } = req.body;
      let passwordCheck = await users.findOne({ where: { id: req.params.id } });
      if (password == passwordCheck) {
        return res.status(400).json({ message: "Password does not match" });
      }
      let deleteUser = users.update({
        is_active: 0,
      });

      res.status(200).json({ message: "User deleted succesfully" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = userControllers;
