const { users } = require("../models");
const emailValidator = require("email-validator");
const { hashPassword, comparePassword } = require("../utils/bcryptUtils");

class userControllers {
  static async signUp(req, res) {
    try {
      const { username, email, pass } = req.body;
      let password = await hashPassword(pass);
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

  static async login(req, res) {
    try {
      const { email, pass } = req.body;

      const findUser = await users.findOne({
        where: { email, isActive: 1 },
      });

      if (!findUser) {
        return res.status(401).json({ message: "Email is not authorized" });
      }

      const checkPassword = await comparePassword(pass, findUser.password);

      if (!checkPassword) {
        return res.status(401).json({ message: "You are not authorized" });
      }

      return res.status(200).json({
        userId: findUser.id,
        username: findUser.username,
      });
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
      res.status(200).json(getUser);
    } catch (err) {
      next(err);
    }
  }

  static async forgetPassEmail(req, res) {
    try {
      const { email } = req.body;
      await users.findOne({
        where: { email, isActive: 1 },
      });
      res.status(200).json({ message: "Email not found" });
    } catch (err) {
      res.status(400).json({ message: `${err.message}` });
    }
  }
}

module.exports = userControllers;
