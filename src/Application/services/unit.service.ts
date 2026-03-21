import { inject, injectable } from "tsyringe";
import { IUnitService } from "../interfaces/unit.service.interface";
import { IUnitRepository } from "../../Domain/repositories/unitRepository.interface";
import { UnitDto } from "../dtos/unit.dto";
import Unit from "../../Domain/entities/unit";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class UnitService implements IUnitService {
  private readonly _unitRepository: IUnitRepository;

  constructor(@inject("IUnitRepository") repository: IUnitRepository) {
    this._unitRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Unit[]> {
    return await this._unitRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Unit | null> {
    return await this._unitRepository.findById(id);
  }
  
  async create(data: UnitDto): Promise<Unit> {
    const now = new Date();
    const newData: Unit = {
      ...data,
      id: generateId(), 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._unitRepository.create(newData);
    return newData;
  }

  async update(id: string, data: UnitDto): Promise<Unit | null> {
    const existing = await this._unitRepository.findById(id);
    if (!existing) {
      return null;
    }

    const now = new Date();
    const newData: Unit = {
      ...data,
      id, 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._unitRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._unitRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._unitRepository.delete(existing);
  }
}
