import { Request, Response } from "express";
import { HTTP_CODES } from "../consts/http-codes";
import { HttpRequest, HttpResponse } from "../protocols";
import { upload } from "../services/uploader";
import { validateRequest } from "../services/validate-request";

type ControllerType = (arg0: any) => HttpResponse | PromiseLike<HttpResponse>;

export const Controller = (controller: ControllerType, schema?: any) => {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = {
      body: request.body,
      query: request.query,
      params: request.params,
      files: request.files ?? undefined,
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

    if (httpRequest?.files?.image) {
      const { error, fileName } = await upload(httpRequest.files.image);
      if (error) {
        response.status(HTTP_CODES.UNPROCESSABLE_ENTITY).json({
          error,
        });
        return;
      }

      httpRequest.body.asset = fileName;
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
