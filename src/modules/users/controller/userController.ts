import { HttpRequest, HttpResponse } from "../../../sharred/protocols";
import {
  badRequest,
  created,
  notContent,
  ok,
  serverError,
} from "../../../sharred/services/http-helper";
import logger from "../../../sharred/services/logger";
import { UsersRepository } from "../repositories/UsersRepository";
import { sendWelcomeEmail } from "../service/userService";

export async function listUser(): Promise<HttpResponse> {
  const repository = new UsersRepository();
  try {
    const response = await repository.list();
    return ok(response);
  } catch (error) {
    logger.error(error);
    return serverError();
  }
}

export async function createUser({ body }: HttpRequest): Promise<HttpResponse> {
  const repository = new UsersRepository();

  const validateEmail = await repository.findByEmail(body.email);
  if (validateEmail) {
    logger.error("Email Already Exists!");
    return badRequest("Email Already Exists");
  }

  try {
    await repository.create(body);
    await sendWelcomeEmail(body);
    return created();
  } catch (error) {
    logger.error(error);
    return serverError();
  }
}

export async function showUser({ params }: HttpRequest): Promise<HttpResponse> {
  const repository = new UsersRepository();
  try {
    const response = await repository.show(params.id);
    return ok(response);
  } catch (error) {
    logger.error(error);
    return serverError();
  }
}

export async function updateUser({
  params,
  body,
}: HttpRequest): Promise<HttpResponse> {
  const repository = new UsersRepository();
  try {
    const response = await repository.update(params.id, body);
    return ok(response);
  } catch (error) {
    logger.error(error);
    return serverError();
  }
}

export async function deleteUser({
  params,
}: HttpRequest): Promise<HttpResponse> {
  const repository = new UsersRepository();
  try {
    await repository.delete(params.id);
    return notContent();
  } catch (error) {
    return serverError();
  }
}
