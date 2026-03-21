import { inject, injectable } from "tsyringe";
import { IProductUnitService } from "../interfaces/productunit.service.interface";
import { IProductUnitRepository } from "../../Domain/repositories/productunitRepository.interface";
import { ProductUnitDto } from "../dtos/productunit.dto";
import ProductUnit from "../../Domain/entities/productunit";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class ProductUnitService implements IProductUnitService {
  private readonly _productunitRepository: IProductUnitRepository;

  constructor(@inject("IProductUnitRepository") repository: IProductUnitRepository) {
    this._productunitRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<ProductUnit[]> {
    return await this._productunitRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<ProductUnit | null> {
    return await this._productunitRepository.findById(id);
  }
  
  async create(data: ProductUnitDto): Promise<ProductUnit> {
    const now = new Date();
    const newData: ProductUnit = {
      ...data,
      id: generateId(), 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._productunitRepository.create(newData);
    return newData;
  }

  async update(id: string, data: ProductUnitDto): Promise<ProductUnit | null> {
    const existing = await this._productunitRepository.findById(id);
    if (!existing) {
      return null;
    }

    const now = new Date();
    const newData: ProductUnit = {
      ...data,
      id, 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._productunitRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._productunitRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._productunitRepository.delete(existing);
  }
}
