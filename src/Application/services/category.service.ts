import { inject, injectable } from "tsyringe";
import { ICategoryService } from "../interfaces/category.service.interface";
import { ICategoryRepository } from "../../Domain/repositories/categoryRepository.interface";
import { CategoryDto } from "../dtos/category.dto";
import Category from "../../Domain/entities/category";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class CategoryService implements ICategoryService {
  private readonly _categoryRepository: ICategoryRepository;

  constructor(@inject("ICategoryRepository") repository: ICategoryRepository) {
    this._categoryRepository = repository;
  }

  async findAll(page: number = 1, pageSize: number = 100): Promise<Category[]> {
    return await this._categoryRepository.findAll(page, pageSize);
  }

  async findById(id: string): Promise<Category | null> {
    return await this._categoryRepository.findById(id);
  }

  async getByCompany(companyId: string): Promise<Category[]> {
    return await this._categoryRepository.findByField("company_id", companyId);
  }

  async create(data: CategoryDto): Promise<Category> {
    const now = new Date();
    const newData: Category = {
      ...data,
      id: generateId(),
      createdAt: now,
      updatedAt: now,
      createdBy: "system",
      updatedBy: "system",
    };
    await this._categoryRepository.create(newData);
    return newData;
  }

  async update(id: string, data: CategoryDto): Promise<Category | null> {
    const existing = await this._categoryRepository.findById(id);
    if (!existing) {
      return null;
    }

    const now = new Date();
    const newData: Category = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now,
      createdBy: "system",
      updatedBy: "system",
    };
    await this._categoryRepository.update(newData);
    return newData;
  }

  async delete(id: string): Promise<void> {
    const existing = await this._categoryRepository.findById(id);
    if (!existing) {
      return;
    }
    return await this._categoryRepository.delete(existing);
  }
}
