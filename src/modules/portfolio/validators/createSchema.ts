import * as yup from 'yup'

export const createPortfolioSchema = yup.object({
  body: yup.object({
    title: yup.string().required(),
    asset: yup.string().required(),
    url: yup.string().required()

  })
})

