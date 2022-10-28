import { Request, Response } from "express";

export function CreateTestmonials(request:Request, response: Response): Response {
  const {name, description, asset} = request.body

  try {

    response.sendStatus(201)

  } catch(e) {

    response.sendStatus(500)
  }
}

export function UpdateTestmonials(request:Request, response:Response): Response {
  const {name, description, asset} = request.body
  
  try {

    response.sendStatus(201)

  } catch(e) {

    response.sendStatus(500)
  }
}
