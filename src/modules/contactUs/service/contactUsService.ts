interface MailData {
  to: string,
  subject: string,
  data: object,
  from: string
}

export async function sendMail({ to, subject, data, from }: MailData) { }