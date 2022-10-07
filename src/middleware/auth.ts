import { Request, Response, NextFunction } from "express";
import jwt from "jwt-simple";

export function auth(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const payload = "rembrandtech";

  const { user_id } = request.headers;
  const tokenEncoded = jwt.encode(payload, user_id as string);
  const authHeaderValue = request.headers.authorization?.replace("Bearer ", "");

  console.log(authHeaderValue, tokenEncoded);

  if (authHeaderValue != tokenEncoded || !authHeaderValue)
    throw new Error("Invalid token");
  next();
}
