import { Category } from "../model/Category";

// DTO - Data Transfer Object
interface IcreateCategoryDTO {
    name: string;
    description: string;
}
class CategoriesRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ description, name }: IcreateCategoryDTO): void {
        const category = new Category();

        /* 
    jeito que seria sem o Objet.assign
    category.name = name;
    category.description = description;
    category.created_at = new Date(); */

        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const category = this.categories.find(
            (category) => category.name === name
        );
        return category;
    }
}

export { CategoriesRepository };
