import { Request, Response } from "express";

export function CreateMission(request:Request, response: Response): Response {
  const {title, description, asset} = request.body

  try {

    response.sendStatus(201)

  } catch(e) {

    response.sendStatus(500)
  }
}

export function UpdateMission(request:Request, response:Response): Response {
  const {title, description, asset} = request.body
  
  try {

    response.sendStatus(201)

  } catch(e) {

    response.sendStatus(500)
  }
}