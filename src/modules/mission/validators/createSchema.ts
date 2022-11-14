import * as yup from 'yup'

export const createMissionSchema = yup.object({
  body: yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
    asset: yup.string().required()

  })
})

