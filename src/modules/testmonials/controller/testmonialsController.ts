import { HttpRequest, HttpResponse } from "../../../sharred/protocols";
import { created, notContent, ok, serverError } from "../../../sharred/services/http-helper";
import logger from "../../../sharred/services/logger";
import { TestmonialsRepository } from "../repositories/testmonialsRepository";

export async function listTestmonials(): Promise<HttpResponse> {
  const repository = new TestmonialsRepository();
  try {
    const response = await repository.list();
    return ok(response);
  } catch (error) {
    logger.error(error)
    return serverError();
  }
}

export async function createTestmonials({ body }: HttpRequest): Promise<HttpResponse> {
  const repository = new TestmonialsRepository();
  try {
    await repository.create(body);
    return created();
  } catch (error) {
    logger.error(error)
    return serverError();
  }
}

export async function showTestmonials({ params }: HttpRequest): Promise<HttpResponse> {
  const repository = new TestmonialsRepository();
  try {
    const response = await repository.show(params.id);
    return ok(response);
  } catch (error) {
    logger.error(error)
    return serverError();
  }
}

export async function updateTestmonials({ params, body }: HttpRequest): Promise<HttpResponse> {
  const repository = new TestmonialsRepository();
  try {
    const response = await repository.update(params.id, body);
    return ok(response);
  } catch (error) {
    logger.error(error)
    return serverError();
  }
}

export async function deleteTestmonials({ params }: HttpRequest): Promise<HttpResponse> {
  const repository = new TestmonialsRepository();
  try {
    await repository.delete(params.id);
    return notContent();
  } catch (error) {
    return serverError();
  }
}

