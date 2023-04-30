const { USERS } = require("../models");

//SIGNUP
class userControllers {
  static async signUp(req, res, next) {
    try {
      const { username, email, password } = req.body;
      // console.log(req.body);
      let findExistingEmail = await USERS.findOne({ where: { email } });
      if (findExistingEmail) {
        return res.status(400).json({ message: "Email already exists!" });
      }
      //VALIDASI CHARACTER LENGTH!!
      let signUp = await USERS.create({
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
