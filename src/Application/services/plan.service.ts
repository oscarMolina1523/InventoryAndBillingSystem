import { inject, injectable } from "tsyringe";
import { IPlanService } from "../interfaces/plan.service.interface";
import { IPlanRepository } from "../../Domain/repositories/planRepository.interface";
import { PlanDto } from "../dtos/plan.dto";
import Plan from "../../Domain/entities/plan";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class PlanService implements IPlanService {
  private readonly _planRepository: IPlanRepository;

  constructor(@inject("IPlanRepository") repository: IPlanRepository) {
    this._planRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Plan[]> {
    return await this._planRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Plan | null> {
    return await this._planRepository.findById(id);
  }
  
  async create(data: PlanDto): Promise<Plan> {
    const now = new Date();
    const newData: Plan = {
      ...data,
      id: generateId(), 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._planRepository.create(newData);
    return newData;
  }

  async update(id: string, data: PlanDto): Promise<Plan | null> {
    const existing = await this._planRepository.findById(id);
    if (!existing) {
      return null;
    }

    const now = new Date();
    const newData: Plan = {
      ...data,
      id, 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._planRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._planRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._planRepository.delete(existing);
  }
}
