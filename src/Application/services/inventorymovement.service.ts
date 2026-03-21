import { inject, injectable } from "tsyringe";
import { IInventoryMovementService } from "../interfaces/inventorymovement.service.interface";
import { IInventoryMovementRepository } from "../../Domain/repositories/inventorymovementRepository.interface";
import { InventoryMovementDto } from "../dtos/inventorymovement.dto";
import InventoryMovement from "../../Domain/entities/inventorymovement";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class InventoryMovementService implements IInventoryMovementService {
  private readonly _inventorymovementRepository: IInventoryMovementRepository;

  constructor(@inject("IInventoryMovementRepository") repository: IInventoryMovementRepository) {
    this._inventorymovementRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<InventoryMovement[]> {
    return await this._inventorymovementRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<InventoryMovement | null> {
    return await this._inventorymovementRepository.findById(id);
  }
  
  async create(data: InventoryMovementDto): Promise<InventoryMovement> {
    const now = new Date();
    const newData: InventoryMovement = {
      ...data,
      id: generateId(), 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._inventorymovementRepository.create(newData);
    return newData;
  }

  async update(id: string, data: InventoryMovementDto): Promise<InventoryMovement | null> {
    const existing = await this._inventorymovementRepository.findById(id);
    if (!existing) {
      return null;
    }

    const now = new Date();
    const newData: InventoryMovement = {
      ...data,
      id, 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._inventorymovementRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._inventorymovementRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._inventorymovementRepository.delete(existing);
  }
}
