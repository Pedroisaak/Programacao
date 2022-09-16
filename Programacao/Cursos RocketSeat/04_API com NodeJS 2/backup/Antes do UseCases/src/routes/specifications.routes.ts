import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();

const specificationsRepostoty = new SpecificationRepository();

specificationsRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    const createSpecificationService = new CreateSpecificationService(
        specificationsRepostoty
    );

    createSpecificationService.execute({ name, description });

    return response.status(201).send();
});

specificationsRoutes.get("/", (request, response) => {
    const all = specificationsRepostoty.list();

    return response.json(all);
});

export { specificationsRoutes };
