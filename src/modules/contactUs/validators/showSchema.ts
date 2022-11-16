import * as yup from 'yup'

export const showContactUsSchema = yup.object({
  params: yup.object({
    id: yup.string().required()
  })
})


