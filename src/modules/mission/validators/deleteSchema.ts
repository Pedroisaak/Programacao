import * as yup from 'yup'

export const deleteMissionSchema = yup.object({
  params: yup.object({
    id: yup.string().required()
  })
})


