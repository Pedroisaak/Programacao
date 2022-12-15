import { HttpRequest, HttpResponse } from "../../../sharred/protocols";
import {
  badRequest,
  notContent,
  ok,
  serverError,
} from "../../../sharred/services/http-helper";
import logger from "../../../sharred/services/logger";
import { UsersRepository } from "../../users/repositories/UsersRepository";
import { comparePassword } from "../../users/service/userService";
import {
  generateToken,
  sendForgotPasswordEmail,
  verifyToken,
} from "../service/authService";

export async function login({ body }: HttpRequest): Promise<HttpResponse> {
  const repository = new UsersRepository();
  const user = (await repository.findByEmail(body.email)) as any | null;
  if (!user) {
    return badRequest("User not found");
  }

  const passwordIsValid = (await comparePassword(
    body.password,
    user.password
  )) as boolean | null;
  if (!passwordIsValid) {
    return badRequest("invalid email or password");
  }

  try {
    const token = await generateToken(user.email);
    return ok({
      user,
      token,
    });
  } catch (error) {
    logger.error(error);
    return serverError();
  }
}

export async function verifyIfTokenIsValid({
  body,
}: HttpRequest): Promise<HttpResponse> {
  const tokenIsValid = await verifyToken(body.token);
  if (!tokenIsValid) return badRequest("invalid token");

  try {
    return notContent();
  } catch (error) {
    logger.error(error);
    return serverError();
  }
}

export async function forgotPassword({
  body,
}: HttpRequest): Promise<HttpResponse> {
  const repository = new UsersRepository();
  const user = (await repository.findByEmail(body.email)) as any | null;
  if (!user) {
    return badRequest("User not found");
  }
  const token = await generateToken(user.email);

  try {
    await sendForgotPasswordEmail({ user, token });
    return notContent();
  } catch (error) {
    logger.error(error);
    return serverError();
  }
}

export async function resetPassword({
  body,
}: HttpRequest): Promise<HttpResponse> {
  const { token, email, password } = body;
  const tokenIsValid = await verifyToken(token);
  if (!tokenIsValid) return badRequest("invalid token");

  const repository = new UsersRepository();
  const user = (await repository.findByEmail(email)) as any | null;
  if (!user) {
    return badRequest("User not found");
  }

  try {
    repository.update(user.id, { password });
    return notContent();
  } catch (error) {
    logger.error(error);
    return serverError();
  }
}
