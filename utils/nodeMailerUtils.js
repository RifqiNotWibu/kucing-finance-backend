var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  logger: true,
  secureConnection: false,
  auth: {
    user: 'kucingtech@gmail.com',
    pass: 'dslfhzzpggohkoqh',
  },
  tls: {
    rejectUnauthorized: true,
  },
})

function generateRandomNumber() {
  const min = 10000
  const max = 99999
  return Math.floor(Math.random() * (max - min + 1)) + min
}
const sendMailer = (email) => {
  const otp = generateRandomNumber().toString()
  var mailOptions = {
    from: process.env.GMAIL,
    to: email,
    subject: 'Forget password OTP',
    text: `This is your one time password : ${otp}`,
  }
  transporter.sendMail(mailOptions)
  return otp
}

module.exports = {
  sendMailer,
}
