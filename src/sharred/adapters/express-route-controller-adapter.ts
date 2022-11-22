import { Request, Response } from "express";
import { HTTP_CODES } from "../consts/http-codes";
import { HttpRequest, HttpResponse } from "../protocols";
import { validateRequest } from "../services/validate-request";

type ControllerType = (arg0: any) => HttpResponse | PromiseLike<HttpResponse>;

export const Controller = (controller: ControllerType, schema?: any) => {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = {
      body: request.body,
      query: request.query,
      params: request.params,
      file: request.file
    };

    if (schema) {
      const { error } = await validateRequest(schema, httpRequest);
      if (error) {
        response.status(HTTP_CODES.UNPROCESSABLE_ENTITY).json({
          error,
        });
        return;
      }
    }

    const { statusCode, errorMessage, body }: HttpResponse = await controller(
      httpRequest
    );

    if (statusCode === HTTP_CODES.NOT_CONTENT) {
      response.status(HTTP_CODES.NOT_CONTENT).json();
      return;
    }

    if (statusCode !== HTTP_CODES.OK) {
      response.status(statusCode).json({
        error: errorMessage,
      });
      return;
    }

    response.status(statusCode).json(body);
  };
};
