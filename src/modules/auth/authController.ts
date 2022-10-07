import { Request, Response } from "express";

export function login(user, password) {
  try {
    //Login
  } catch (e) {
    //Erro
  }
}

export function logOut(response: Response) {
  response.redirect(""); //redirect para o index quando for criado
}

export function forgotPassword(email: string) {
  //Buscar usuário no db e dar update no mesmo
}
