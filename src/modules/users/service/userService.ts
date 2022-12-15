import { sendEmail } from "../../../sharred/services/email";
import bcrypt from "bcryptjs";


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
    subject: "[Rembrandtech] Welcome",
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