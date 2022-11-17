import * as yup from 'yup'

export const deleteUserSchema = yup.object({
  params: yup.object({
    id: yup.string().required()
  })
})


