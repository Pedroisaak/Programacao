import * as yup from 'yup'

export const deleteTestmonialsSchema = yup.object({
  params: yup.object({
    id: yup.string().required()
  })
})


