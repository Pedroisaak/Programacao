import * as yup from 'yup'

export const deleteContactUsSchema = yup.object({
  params: yup.object({
    id: yup.string().required()
  })
})


