import Plan from "../../Domain/entities/plan";
import { PlanDto } from './../dtos/plan.dto';

export interface IPlanService {
  findAll(page: number, pageSize: number): Promise<Plan[]>;
  findById(id: string): Promise<Plan | null>;
  create(data: PlanDto): Promise<Plan>;
  update(id: string, data: PlanDto): Promise<Plan | null>;
  delete(id: string): Promise<void>;
}
