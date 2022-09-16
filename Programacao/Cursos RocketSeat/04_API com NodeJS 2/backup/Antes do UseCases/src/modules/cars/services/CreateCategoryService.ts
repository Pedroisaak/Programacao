import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

// eslint-disable-next-line @typescript-eslint/naming-convention
interface Irequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {}
    execute({ description, name }: Irequest): void {
        const categoryAlreadyExists =
            this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Categoria já existe");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };
