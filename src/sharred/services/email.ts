import nodemailer from "nodemailer";
import logger from "../../sharred/services/logger";
import { EMAIL_CONFIGURATION } from "../consts/email";
import { templateConstructorlService } from "./template-constructor";

interface emailData {
  from: string;
  to: string;
  subject: string;
  text: string;
}

export function sendEmailService(body: emailData, templateName: string): void {
  try {
    const transporter = nodemailer.createTransport(EMAIL_CONFIGURATION);
    const template = templateConstructorlService(templateName, body);

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      sender: process.env.EMAIL_FROM,
      to: body.to,
      subject: body.subject || `[rembrandtech contact]`,
      html: template,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) logger.error(err);
      // logger.info(info);
      logger.info("Email sent");
    });
  } catch (error) {
    logger.error(error, "Error to sent email");
  }
}
