const { users } = require("../models");
const emailValidator = require("email-validator");

//SIGNUP
class userControllers {
  static async signUp(req, res, next) {
    try {
      const { username, email, password } = req.body;
      // console.log(req.body);
      if (!emailValidator.validate(email)) {
        return res.status(400).json({ message: "Incorrect email format!" });
      }

      let findExistingEmail = await users.findOne({ where: { email } });
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
}

module.exports = userControllers;
