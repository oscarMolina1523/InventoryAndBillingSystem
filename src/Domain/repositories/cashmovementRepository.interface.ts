import CashMovement from '../entities/cashmovement';

export interface ICashMovementRepository {
  findAll(page: number, pageSize: number): Promise<CashMovement[]>;
  findById(id: string): Promise<CashMovement | null>;
  findByField(field: string, value: string): Promise<CashMovement[]>;
  create(data: CashMovement): Promise<void>;
  update(data: CashMovement): Promise<void>;
  delete(data: CashMovement): Promise<void>;
}
