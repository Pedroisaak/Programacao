import * as yup from 'yup'

export const deleteAboutUsSchema = yup.object({
  params: yup.object({
    id: yup.string().required()
  })
})


