import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationsRepostoty: ISpecificationRepository) {}
    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists =
            this.specificationsRepostoty.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Especificação já existe");
        }
        this.specificationsRepostoty.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationUseCase };
