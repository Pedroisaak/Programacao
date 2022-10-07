import { Router } from "express";
import { auth } from "../middleware/auth";

const router = Router();

router.use("/", auth, (request, response) => {
  return response.json({ message: "Route OK" });
});

export { router };
