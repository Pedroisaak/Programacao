import * as yup from 'yup'

export const updateAboutUsSchema = yup.object({
  body: yup.object({
    title: yup.string().required(),
    description: yup.string().required()
  }),
  params: yup.object({
    id: yup.string().required()
  })
})


