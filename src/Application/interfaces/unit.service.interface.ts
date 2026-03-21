import Unit from "../../Domain/entities/unit";
import { UnitDto } from './../dtos/unit.dto';

export interface IUnitService {
  findAll(page: number, pageSize: number): Promise<Unit[]>;
  findById(id: string): Promise<Unit | null>;
  create(data: UnitDto): Promise<Unit>;
  update(id: string, data: UnitDto): Promise<Unit | null>;
  delete(id: string): Promise<void>;
}
