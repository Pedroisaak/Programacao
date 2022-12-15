import * as yup from "yup";

export const resetPasswordSchema = yup.object({
  body: yup.object({
    email: yup.string().required(),
    token: yup.string().required(),
    password: yup.string().required(),
  }),
});
