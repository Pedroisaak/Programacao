import { HttpRequest, HttpResponse } from "../../../sharred/protocols";
import { created, notContent, ok, serverError } from "../../../sharred/services/http-helper";
import logger from "../../../sharred/services/logger";
import { ContactUsRepository } from "../repositories/contactUsRepository";

export async function listContactUs(): Promise<HttpResponse> {
  const repository = new ContactUsRepository();
  try {
    const response = await repository.list();
    return ok(response);
  } catch (error) {
    logger.error(error)
    return serverError();
  }
}

export async function createContactUs({ body }: HttpRequest): Promise<HttpResponse> {
  const repository = new ContactUsRepository();
  try {
    await repository.create(body);
    return created();
  } catch (error) {
    logger.error(error)
    return serverError();
  }
}

export async function showContactUs({ params }: HttpRequest): Promise<HttpResponse> {
  const repository = new ContactUsRepository();
  try {
    const response = await repository.show(params.id);
    return ok(response);
  } catch (error) {
    logger.error(error)
    return serverError();
  }
}

export async function updateContactUs({ params, body }: HttpRequest): Promise<HttpResponse> {
  const repository = new ContactUsRepository();
  try {
    const response = await repository.update(params.id, body);
    return ok(response);
  } catch (error) {
    logger.error(error)
    return serverError();
  }
}

export async function deleteContactUs({ params }: HttpRequest): Promise<HttpResponse> {
  const repository = new ContactUsRepository();
  try {
    await repository.delete(params.id);
    return notContent();
  } catch (error) {
    return serverError();
  }
}
