import { Request, Response } from "express";

export function CreatePortfolio(request:Request, response: Response): Response {
  const {title, url, asset} = request.body

  try {

    response.sendStatus(201)

  } catch(e) {

    response.sendStatus(500)
  }
}

export function UpdatePortfolio(request:Request, response:Response): Response {
  const {title, url, asset} = request.body
  
  try {

    response.sendStatus(201)

  } catch(e) {

    response.sendStatus(500)
  }
}
