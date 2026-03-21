import { inject, injectable } from "tsyringe";
import { ISuscriptionService } from "../interfaces/suscription.service.interface";
import { ISuscriptionRepository } from "../../Domain/repositories/suscriptionRepository.interface";
import { SuscriptionDto } from "../dtos/suscription.dto";
import Suscription from "../../Domain/entities/suscription";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class SuscriptionService implements ISuscriptionService {
  private readonly _suscriptionRepository: ISuscriptionRepository;

  constructor(@inject("ISuscriptionRepository") repository: ISuscriptionRepository) {
    this._suscriptionRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Suscription[]> {
    return await this._suscriptionRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Suscription | null> {
    return await this._suscriptionRepository.findById(id);
  }
  
  async create(data: SuscriptionDto): Promise<Suscription> {
    const now = new Date();
    const newData: Suscription = {
      ...data,
      id: generateId(), 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._suscriptionRepository.create(newData);
    return newData;
  }

  async update(id: string, data: SuscriptionDto): Promise<Suscription | null> {
    const existing = await this._suscriptionRepository.findById(id);
    if (!existing) {
      return null;
    }

    const now = new Date();
    const newData: Suscription = {
      ...data,
      id, 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._suscriptionRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._suscriptionRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._suscriptionRepository.delete(existing);
  }
}
