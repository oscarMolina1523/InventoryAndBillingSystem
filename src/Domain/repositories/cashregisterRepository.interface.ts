import CashRegister from '../entities/cashregister';

export interface ICashRegisterRepository {
  findAll(page: number, pageSize: number): Promise<CashRegister[]>;
  findById(id: string): Promise<CashRegister | null>;
  create(data: CashRegister): Promise<void>;
  update(data: CashRegister): Promise<void>;
  delete(data: CashRegister): Promise<void>;
}
