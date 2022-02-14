import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import "dotenv/config";

export const sendEmail = function (email, subject, text) {
  var transporter = nodemailer.createTransport(
    smtpTransport({
      service: process.env.SMTP_SERVICE,
      host: process.env.SMTP_HOST,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  );

  var mailOptions = {
    from: process.env.SMTP_FROM,
    to: email,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return false;
    } else {
      return true;
    }
  });

  return false;
};
