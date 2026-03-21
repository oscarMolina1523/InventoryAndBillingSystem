import { inject, injectable } from "tsyringe";
import { IPurchaseService } from "../interfaces/purchase.service.interface";
import { IPurchaseRepository } from "../../Domain/repositories/purchaseRepository.interface";
import { PurchaseDto } from "../dtos/purchase.dto";
import Purchase from "../../Domain/entities/purchase";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class PurchaseService implements IPurchaseService {
  private readonly _purchaseRepository: IPurchaseRepository;

  constructor(@inject("IPurchaseRepository") repository: IPurchaseRepository) {
    this._purchaseRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Purchase[]> {
    return await this._purchaseRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Purchase | null> {
    return await this._purchaseRepository.findById(id);
  }
  
  async create(data: PurchaseDto): Promise<Purchase> {
    const now = new Date();
    const newData: Purchase = {
      ...data,
      id: generateId(), 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._purchaseRepository.create(newData);
    return newData;
  }

  async update(id: string, data: PurchaseDto): Promise<Purchase | null> {
    const existing = await this._purchaseRepository.findById(id);
    if (!existing) {
      return null;
    }

    const now = new Date();
    const newData: Purchase = {
      ...data,
      id, 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._purchaseRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._purchaseRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._purchaseRepository.delete(existing);
  }
}
