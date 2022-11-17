import * as yup from 'yup'

export const updateUserSchema = yup.object({
  body: yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  }),
  params: yup.object({
    id: yup.string().required()
  })
})


