import { Router } from "express";
import { Controller } from "../../sharred/adapters/express-route-controller-adapter";
import {
  forgotPassword,
  login,
  resetPassword,
  verifyIfTokenIsValid,
} from "./controller/authController";
import {
  loginSchema,
  verifySchema,
  forgotPasswordSchema,
  resetPasswordSchema,
} from "./validators";

export default (router: Router): Router => {
  router.post("/v1/login", Controller(login, loginSchema));
  router.post(
    "/v1/verify-token",
    Controller(verifyIfTokenIsValid, verifySchema)
  );
  router.post(
    "/v1/forgot-password",
    Controller(forgotPassword, forgotPasswordSchema)
  );
  router.post(
    "/v1/reset-password",
    Controller(resetPassword, resetPasswordSchema)
  );

  return router;
};
