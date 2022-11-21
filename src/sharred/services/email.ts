import nodemailer from "nodemailer";
import logger from "../../sharred/services/logger";
import path from 'path';
import hbs from 'nodemailer-express-handlebars';

interface emailData {
  from: string,
  to: string,
  subject: string
  text: string
}

export function sendEmailService(body: emailData): void {

  //server para testes usando fake smtp https://mailtrap.io/
  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "2befa4c6175ef9",
      pass: "51c5f27b31c294"
    },
    tls: { rejectUnauthorized: false }
  })
  //server usando o smtp do gmail
  /*   const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'rembrandtechnoreply@gmail.com',
        pass: process.env.EMAILSERVICE
      }
    }); */

  const mailOptions = {
    from: body.from,
    to: body.to,
    subject: body.subject,
    template: 'welcome',
    text: body.text,
  };


  const handlebarOptions = {
    viewEngine: {
      partialsDir: path.resolve('./src/sharred/templates/email-templates/'),
      defaultLayout: false,
    },
    viewPath: path.resolve('./src/sharred/templates/email-templates/'),
  };

  // use a template file with nodemailer
  transporter.use('compile', hbs(handlebarOptions))

  transporter.sendMail(mailOptions, (err, info) => {
    if (err)
      logger.info(err)
    else
      logger.info(info);
  });
}







