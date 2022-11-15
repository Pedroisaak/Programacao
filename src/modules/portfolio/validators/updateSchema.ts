import * as yup from 'yup'

export const updatePortfolioSchema = yup.object({
  body: yup.object({
    title: yup.string().required(),
    asset: yup.string().required(),
    url: yup.string().required()
  }),
  params: yup.object({
    id: yup.string().required()
  })
})


