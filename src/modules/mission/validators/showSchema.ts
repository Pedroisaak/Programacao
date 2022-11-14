import * as yup from 'yup'

export const showMissionSchema = yup.object({
  params: yup.object({
    id: yup.string().required()
  })
})


