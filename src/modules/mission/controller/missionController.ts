import { HttpRequest, HttpResponse } from "../../../sharred/protocols";
import { created, notContent, ok, serverError } from "../../../sharred/services/http-helper";
import logger from "../../../sharred/services/logger";
import { MissionRepository } from "../repositories/missionRepository";

export async function listMission(): Promise<HttpResponse> {
  const repository = new MissionRepository();
  try {
    const response = await repository.list();
    return ok(response);
  } catch (error) {
    logger.error(error)
    return serverError();
  }
}

export async function createMission({ body }: HttpRequest): Promise<HttpResponse> {
  const repository = new MissionRepository();
  try {
    await repository.create(body);
    return created();
  } catch (error) {
    logger.error(error)
    return serverError();
  }
}

export async function showMission({ params }: HttpRequest): Promise<HttpResponse> {
  const repository = new MissionRepository();
  try {
    const response = await repository.show(params.id);
    return ok(response);
  } catch (error) {
    logger.error(error)
    return serverError();
  }
}

export async function updateMission({ params, body }: HttpRequest): Promise<HttpResponse> {
  const repository = new MissionRepository();
  try {
    const response = await repository.update(params.id, body);
    return ok(response);
  } catch (error) {
    logger.error(error)
    return serverError();
  }
}

export async function deleteMission({ params }: HttpRequest): Promise<HttpResponse> {
  const repository = new MissionRepository();
  try {
    await repository.delete(params.id);
    return notContent();
  } catch (error) {
    return serverError();
  }
}

