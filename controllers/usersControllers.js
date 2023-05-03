const { users } = require("../models");
const emailValidator = require("email-validator");

class userControllers {
  static async signUp(req, res) {
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

      //CREATE QUERY
      await users.create({
        username,
        email,
        password,
      });
      res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
      res.status(500).json({ message: `${err.message}` });
    }
  }

  static async updateUser(req, res) {
    try {
      const { id, username, password } = req.body;

      //UPDATE QUERY
      await users.update(
        {
          username: username,
          password: password,
        },
        {
          where: { id, isActive: 1 },
        }
      );
      res.status(200).json({ message: "User updated succesfully" });
    } catch (err) {
      res.status(500).json({ message: `${err.message}` });
    }
  }

  static async deleteUser(req, res) {
    try {
      const { id, password } = req.body;
      let passwordCheck = await users.findOne({ where: { id } });
      if (password != passwordCheck.password) {
        //STUDYCASE
        console.log(passwordCheck);
        return res.status(400).json({ message: "Password does not match" });
      }

      //DELETE QUERY
      users.update(
        {
          isActive: 0,
        },
        {
          where: { id, isActive: 1 },
        }
      );
      res.status(200).json({ message: "User deleted succesfully" });
    } catch (err) {
      res.status(500).json({ message: `${err.message}` });
    }
  }

  static async getUser(req, res, next) {
    try {
      const { id } = req.body;
      let getUser = await users.findOne({
        where: { id, isActive: 1 },
      });
      // console.log(getUser);
      res.status(200).json(getUser);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = userControllers;
