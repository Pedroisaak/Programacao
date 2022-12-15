import { sendEmail } from "../../../sharred/services/email";


export async function turnUserAdmin({ }: any) { }

export async function updateAccount({ }: any) { }

export async function forgotPassword({ }: any) { }


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