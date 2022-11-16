import * as yup from 'yup'

export const createContactUsSchema = yup.object({
  body: yup.object({
    name: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().required(),
    description: yup.string().required(),
  })
})

