import { Request, Response } from "express";
import { ILoginDTO } from "./IloginDto";

export function login({ email, password }: ILoginDTO) {
  try {
    //Login
  } catch (e) {
    //Erro
  }
}

export function logOut(response: Response) {
  response.redirect(""); //redirect para o index quando for criado
}

export function forgotPassword(email: ILoginDTO) {
  //Buscar usuário no db e dar update no mesmo
}
