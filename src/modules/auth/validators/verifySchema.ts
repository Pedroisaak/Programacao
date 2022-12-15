import * as yup from 'yup'

export const verifySchema = yup.object({
  body: yup.object({
    token: yup.string().required(),
  })
})


