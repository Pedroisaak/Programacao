import * as yup from 'yup'

export const deletePortfolioSchema = yup.object({
  params: yup.object({
    id: yup.string().required()
  })
})


