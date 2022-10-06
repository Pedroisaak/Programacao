/* Implementar middleware para verificar se o usuário existe */
import { NextFunction, Request, Response } from "express";
import jwt from "jwt-simple";

function authToken(request: Request, response: Response, next: NextFunction) {
  var payload = "rembrandtech";
  var secret = "123123";

  var tokenEncoded = jwt.encode(payload, secret, "HS512");

  const authHeader = request.headers.authorization;
  const [, tokenHeader] = authHeader.split(" ");

  console.log("tokenEncoded", tokenEncoded);
  console.log("tokenHeader", tokenHeader);

  if (tokenHeader === tokenEncoded) next();
  throw new Error("Invalid Token");
}
export { authToken };
