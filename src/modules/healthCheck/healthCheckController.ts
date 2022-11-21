
import { HttpResponse } from "../../sharred/protocols";
import { ok, serverError } from "../../sharred/services/http-helper";
import logger from "../../sharred/services/logger";
import { MongoHelper } from "../../sharred/db/mongoDb";

export async function healthCheck(): Promise<HttpResponse> {
  try {
    const response = {
      dbStatus: MongoHelper.getConnectionState()
    }
    return ok(response);
  } catch (error) {
    logger.error(error)
    return serverError();
  }
}
