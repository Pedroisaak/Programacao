export const EMAIL_CONFIGURATION = process.env.ENVIRONMENT !== 'production' ? {
  //server para testes usando fake smtp https://mailtrap.io/
  host: "smtp.mailtrap.io",
  port: 2525,
  secure: false, //true for 465, false for other ports
  auth: {
    user: "2befa4c6175ef9",
    pass: "51c5f27b31c294",
  },
  tls: { rejectUnauthorized: false },
} : {
  //server usando o smtp do gmail
  service: "gmail",
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_SERVICE,
  },
}