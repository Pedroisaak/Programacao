import * as yup from 'yup'

export const createTestmonialsSchema = yup.object({
  body: yup.object({
    name: yup.string().required(),
    description: yup.string().required(),
    asset: yup.string().required()

  })
})

