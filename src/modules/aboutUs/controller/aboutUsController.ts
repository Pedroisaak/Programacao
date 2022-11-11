import { HttpRequest, HttpResponse } from "../../../sharred/protocols";
import { created, notContent, ok, serverError } from "../../../sharred/services/http-helper";
import logger from "../../../sharred/services/logger";
import { AboutUsRepository } from "../repositories/aboutUsRepository";

export async function listAboutUs(): Promise<HttpResponse> {
  const repository = new AboutUsRepository();
  try {
    const response = await repository.list();
    return ok(response);
  } catch (error) {
    logger.error(error)
    return serverError();
  }
}

export async function createAboutUs({ body }: HttpRequest): Promise<HttpResponse> {
  const repository = new AboutUsRepository();
  try {
    await repository.create(body);
    return created();
  } catch (error) {
    logger.error(error)
    return serverError();
  }
}

export async function showAboutUs({ params }: HttpRequest): Promise<HttpResponse> {
  const repository = new AboutUsRepository();
  try {
    const response = await repository.show(params.id);
    return ok(response);
  } catch (error) {
    logger.error(error)
    return serverError();
  }
}

export async function updateAboutUs({ params, body }: HttpRequest): Promise<HttpResponse> {
  const repository = new AboutUsRepository();
  try {
    const response = await repository.update(params.id, body);
    return ok(response);
  } catch (error) {
    logger.error(error)
    return serverError();
  }
}

export async function deleteAboutUs({ params }: HttpRequest): Promise<HttpResponse> {
  const repository = new AboutUsRepository();
  try {
    await repository.delete(params.id);
    return notContent();
  } catch (error) {
    return serverError();
  }
}
