const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "welton.araujo2014@gmail.com",
    pass: "vcdjughgsiefendv",
  },
});

let options = {
  from: "welton.araujo2014@gmail.com",
  to: "welton.rodrigues2013@gmail.com",
  subject: "teste",
  text: "teste",
}

const sendEmail = async () => {
  try {
    console.log('Enviando e-mail');
    await transporter.sendMail(options);
    console.log('E-mail enviado!');
    process.exit();
  } catch (error) {
    console.log(error);
  }
}

sendEmail();