import { Router } from "express";
import { auth } from "../middleware/auth";
import { cors } from "../middleware/cors";

const router = Router();

router.use("/", auth, cors, (request, response) => {
  return response.json({ message: "Route OK" });
});

export { router };
