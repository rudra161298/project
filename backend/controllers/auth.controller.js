const _ = require("lodash");
const User = require("../models/user.model");
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email }).exec();
    if (user) {
      throw "User already registered";
    }

    const newUser = new User(req.body);
    await newUser.save();

    const mailOptions = {
      from: `Invest with tribe <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: "Welcome",
      text: "Welcome",
      html: `<p> Thank you for registering </p>`,
    };
    // send Email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      message: "Registered",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      error: err,
    });
  }
};
