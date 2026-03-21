import { inject, injectable } from "tsyringe";
import { ISaleItemService } from "../interfaces/saleitem.service.interface";
import { ISaleItemRepository } from "../../Domain/repositories/saleitemRepository.interface";
import { SaleItemDto } from "../dtos/saleitem.dto";
import SaleItem from "../../Domain/entities/saleitem";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class SaleItemService implements ISaleItemService {
  private readonly _saleitemRepository: ISaleItemRepository;

  constructor(@inject("ISaleItemRepository") repository: ISaleItemRepository) {
    this._saleitemRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<SaleItem[]> {
    return await this._saleitemRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<SaleItem | null> {
    return await this._saleitemRepository.findById(id);
  }
  
  async create(data: SaleItemDto): Promise<SaleItem> {
    const now = new Date();
    const newData: SaleItem = {
      ...data,
      id: generateId(), 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._saleitemRepository.create(newData);
    return newData;
  }

  async update(id: string, data: SaleItemDto): Promise<SaleItem | null> {
    const existing = await this._saleitemRepository.findById(id);
    if (!existing) {
      return null;
    }

    const now = new Date();
    const newData: SaleItem = {
      ...data,
      id, 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._saleitemRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._saleitemRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._saleitemRepository.delete(existing);
  }
}
