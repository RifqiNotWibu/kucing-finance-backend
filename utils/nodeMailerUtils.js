var nodemailer = require("nodemailer");
require("dotenv").config();

var transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  logger: true,
  debug: true,
  secureConnection: false,
  auth: {
    user: process.env.GMAIL,
    pass: process.env.GMAILPASS,
  },
  tls: {
    rejectUnauthorized: true,
  },
});

var mailOptions = {
  from: process.env.GMAIL,
  to: "charis12876@gmail.com",
  subject: "Kontol bat ni project sumpah",
  text: "ketikseutujubaiklah",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

module.exports = {
  transporter,
  mailOptions,
};
