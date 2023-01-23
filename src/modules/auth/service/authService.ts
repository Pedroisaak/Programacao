import jwt from "jwt-simple";
import { AppMessages } from "../../../sharred/consts/AppMessages";
import { sendEmail } from "../../../sharred/services/email";

export async function generateToken(email: string) {
  return jwt.encode(email, process.env.JWT_SECRET || "secret");
}

export async function verifyToken(token: string) {
  try {
    return jwt.decode(token, process.env.JWT_SECRET || "secret");
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function sendForgotPasswordEmail({ user, token }: any) {
  const config = {
    subject: AppMessages.ForgotEmailSubject,
    email: user.email,
  };

  const data = {
    link: `${process.env.APP_WEB_URL}/sign-up-activate?token=${token}&email=${user.email}`,
    name: user.name,
    token,
  };
  return sendEmail({
    config,
    data,
    templateName: "forgot-password",
  });
}
