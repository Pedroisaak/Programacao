import * as yup from 'yup'

export const showUserSchema = yup.object({
  params: yup.object({
    id: yup.string().required()
  })
})


