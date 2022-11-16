import * as yup from 'yup'

export const updateTestmonialsSchema = yup.object({
  body: yup.object({
    name: yup.string().required(),
    description: yup.string().required(),
    asset: yup.string().required()
  }),
  params: yup.object({
    id: yup.string().required()
  })
})


