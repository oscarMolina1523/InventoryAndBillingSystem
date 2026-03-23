import CashMovement from "../../Domain/entities/cashmovement";
import { CashMovementDto } from "./../dtos/cashmovement.dto";

export interface ICashMovementService {
  findAll(page: number, pageSize: number): Promise<CashMovement[]>;
  findById(id: string): Promise<CashMovement | null>;
  getByCompany(companyId: string): Promise<CashMovement[]>;
  create(data: CashMovementDto): Promise<CashMovement>;
  update(id: string, data: CashMovementDto): Promise<CashMovement | null>;
  delete(id: string): Promise<void>;
}
