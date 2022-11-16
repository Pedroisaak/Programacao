import * as yup from 'yup'

export const updateContactUsSchema = yup.object({
  body: yup.object({
    name: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().required(),
    description: yup.string().required(),
  }),
  params: yup.object({
    id: yup.string().required()
  })
})


