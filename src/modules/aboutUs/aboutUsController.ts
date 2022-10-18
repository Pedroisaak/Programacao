import { Request, Response } from "express";

export function CreateAboutUs(request:Request, response: Response): Response {
  const {title, description} = request.body
  try {

    response.sendStatus(201)

  } catch(e) {

    response.sendStatus(500)
  }
}

export function UpdateAboutUs(request:Request, response:Response): Response {
  const {title, description} = request.body
  try {

    response.sendStatus(201)

  } catch(e) {

    response.sendStatus(500)
  }
}
