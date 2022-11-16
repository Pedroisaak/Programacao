import { HttpRequest, HttpResponse } from "../../../sharred/protocols";
import { created, notContent, ok, serverError } from "../../../sharred/services/http-helper";
import logger from "../../../sharred/services/logger";
import { PortfolioRepository } from "../repositories/portfolioRepository";

export async function listPortfolio(): Promise<HttpResponse> {
  const repository = new PortfolioRepository();
  try {
    const response = await repository.list();
    return ok(response);
  } catch (error) {
    logger.error(error)
    return serverError();
  }
}

export async function createPortfolio({ body }: HttpRequest): Promise<HttpResponse> {
  const repository = new PortfolioRepository();
  try {
    await repository.create(body);
    return created();
  } catch (error) {
    logger.error(error)
    return serverError();
  }
}

export async function showPortfolio({ params }: HttpRequest): Promise<HttpResponse> {
  const repository = new PortfolioRepository();
  try {
    const response = await repository.show(params.id);
    return ok(response);
  } catch (error) {
    logger.error(error)
    return serverError();
  }
}

export async function updatePortfolio({ params, body }: HttpRequest): Promise<HttpResponse> {
  const repository = new PortfolioRepository();
  try {
    const response = await repository.update(params.id, body);
    return ok(response);
  } catch (error) {
    logger.error(error)
    return serverError();
  }
}

export async function deletePortfolio({ params }: HttpRequest): Promise<HttpResponse> {
  const repository = new PortfolioRepository();
  try {
    await repository.delete(params.id);
    return notContent();
  } catch (error) {
    return serverError();
  }
}

