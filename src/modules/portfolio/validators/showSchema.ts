import * as yup from 'yup'

export const showPortfolioSchema = yup.object({
  params: yup.object({
    id: yup.string().required()
  })
})


