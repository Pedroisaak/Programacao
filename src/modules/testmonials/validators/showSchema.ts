import * as yup from 'yup'

export const showTestmonialsSchema = yup.object({
  params: yup.object({
    id: yup.string().required()
  })
})


