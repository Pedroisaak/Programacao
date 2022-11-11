import * as yup from 'yup'

export const createAboutUsSchema = yup.object({
  body: yup.object({
    title: yup.string().required(),
    description: yup.string().required()
  })
})

