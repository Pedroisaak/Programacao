import * as yup from 'yup'

export const showAboutUsSchema = yup.object({
  params: yup.object({
    id: yup.string().required()
  })
})


