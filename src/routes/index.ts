import { Router } from "express";

const router = Router();

router.use("/", (request, response) => {
  return response.json({ message: "Route OK" });
});

export { router };
