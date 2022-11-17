import * as yup from 'yup'

export const createUserSchema = yup.object({
  body: yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  })
})

