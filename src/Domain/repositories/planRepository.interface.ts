import Plan from '../entities/plan';

export interface IPlanRepository {
  findAll(page: number, pageSize: number): Promise<Plan[]>;
  findById(id: string): Promise<Plan | null>;
  create(data: Plan): Promise<void>;
  update(data: Plan): Promise<void>;
  delete(data: Plan): Promise<void>;
}
