import { notImplemented } from "../../sharred/helpers/http-helper";
import { HttpResponse } from "../../sharred/protocols";
import { ILoginDTO } from "./IloginDto";

export function login({ email, password }: ILoginDTO): HttpResponse {
  return notImplemented()
}

export function logout(): HttpResponse {
  return notImplemented()
}

export function forgotPassword(email: ILoginDTO): HttpResponse {
  return notImplemented()
}
