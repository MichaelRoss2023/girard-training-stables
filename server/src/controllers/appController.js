const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

const { EMAIL, PASSWORD, MAIN_URL } = require("../config");

let transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
//  TODO: change the Email , password , url as per the need in the config.
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

let MailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "Nodemailer",
    link: MAIN_URL,
  },
});

const sendSignUpMail = (req, res) => {
  const { userEmail, name } = req.body;

  // sign up the user .....

  // then send the email
  let response = {
    body: {
      name,
      intro: "Welcome to GIRARD TRAINING STABLES!",
    },
  };

  let mail = MailGenerator.generate(response);

  let message = {
    from: EMAIL,
    to: userEmail,
    //TODO:Change the subject dynamically
    subject: "GIRARD TRAINING STABLES - SIGNUP sucessful",
    html: mail,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res
        .status(200)
        .json({ msg: "Email sent Sucessfully" });
    })
    .catch((error) => console.error(error));
};

const sendLessonMail = (req, res) => {
  const { name, userEmail } = req.body;

  let response = {
    body: {
      name,
      intro: "Welcome to the GIRAD Training membership ",
      table: {
        data: [
          {
          //TODO:add misc details
           lesson:"LESSON_NAME"
          },
        ],
      },
      outro: "Thanks for signing up!",
    },
  };

  let mail = MailGenerator.generate(response);

  let message = {
    from: EMAIL,
    to: userEmail,
    subject: "Signup mail",
    html: mail,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res
        .status(200)
        .json({ msg: "you should receive an email from us" });
    })
    .catch((error) => console.error(error));
};

module.exports = {
  sendSignupMail,
  sendLessonMail,
};