import { Request, Response } from 'express'
import { HttpRequest, HttpResponse } from '../protocols'

type ControllerType = (arg0: any) => HttpResponse | PromiseLike<HttpResponse>

export const Controller = (controller: ControllerType) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const httpResponse: HttpResponse = await controller(httpRequest)

    if (httpResponse.statusCode !== 200) {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
