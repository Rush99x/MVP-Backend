const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

// const sendEmail  = asyncHandler(async (data, req, res) => {

//     const transporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         auth: {
//           // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//           user: process.env.MAIL_ID,
//           pass: process.env.MP,
//         },
//       });
      
//       // async..await is not allowed in global scope, must use a wrapper
//       async function main() {
//         // send mail with defined transport object
//         const info = await transporter.sendMail({
//           from: '"Hey 👻" <abc@gmail.com>', // sender address
//           to: data.to, // list of receivers
//           subject: data.subject, // Subject line
//           text: data.text, // plain text body
//           html: data.html, // html body
//         });
      
//         console.log("Message sent: %s", info.messageId);
//         // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      
//         //
//         // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
//         //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
//         //       <https://github.com/forwardemail/preview-email>
//         //

// });

const sendEmail = asyncHandler(async (data, req, res) => {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.MAIL_ID,
          pass: process.env.MP,
        },
      });
  
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: '"Hey 👻" <abc@gmail.com>',
        to: data.to,
        subject: data.subject,
        text: data.text,
        html: data.html,
      });
  
      console.log("Message sent: %s", info.messageId);
      // You might want to send a response back to the client indicating success, e.g., res.json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

module.exports = sendEmail;
