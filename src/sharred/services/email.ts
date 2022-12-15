import nodemailer from "nodemailer";
import logger from "../../sharred/services/logger";
import { EMAIL_CONFIGURATION } from "../consts/email";
import { templateConstructorService } from "./template-constructor";

interface emailData {
  from: string;
  to: string;
  subject: string;
  text: string;
}

interface emailData {
  config: {
    from?: string;
    sender?: string;
    email: string;
    subject: string;
  };
  data: any;
  templateName: string;
}

interface emailData {
  config: {
    from?: string;
    sender?: string;
    email: string;
    subject: string;
  };
  data: any;
  templateName: string;
}

export function sendEmail({ config, data, templateName }: emailData): void {
  try {
    const transporter = nodemailer.createTransport(EMAIL_CONFIGURATION);
    const template = templateConstructorService(templateName, data);

    const mailOptions = {
      from: config.from || process.env.EMAIL_FROM,
      sender: config.sender || process.env.EMAIL_FROM,
      to: config.email,
      subject: config.subject,
      html: template,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) logger.error(err);
      logger.info(info);
      logger.info("Email sent");
    });
  } catch (error) {
    logger.error(error, "Error to sent email");
  }
}
