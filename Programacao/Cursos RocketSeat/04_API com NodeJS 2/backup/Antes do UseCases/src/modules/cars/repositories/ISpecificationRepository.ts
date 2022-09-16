import { SpecificationRepository } from "./SpecificationRepository";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({ description, name }: ICreateSpecificationDTO): void;
    findByName(name: string): SpecificationRepository;
}

export { ISpecificationRepository, ICreateSpecificationDTO };
