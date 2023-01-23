import { sendEmail } from "../../../sharred/services/email";
import bcrypt from "bcryptjs";
import { AppMessages } from "../../../sharred/consts/AppMessages";


const SALT_WORK_FACTOR = 10;

const getSalt = async () => {
  return await bcrypt.genSalt(SALT_WORK_FACTOR);
};

export async function encryptPassword(password: string) {
  const salt = await getSalt();
  return await bcrypt.hash(password, salt);
}

export async function comparePassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}


export async function sendWelcomeEmail({ email, name }: any) {
  const config = {
    email,
    subject: AppMessages.WelcomeEmailSubject,
  };

  const data = {
    name,
  };

  return sendEmail({
    config,
    data,
    templateName: "welcome",
  });
}