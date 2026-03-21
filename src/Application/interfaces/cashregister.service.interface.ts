import CashRegister from "../../Domain/entities/cashregister";
import { CashRegisterDto } from './../dtos/cashregister.dto';

export interface ICashRegisterService {
  findAll(page: number, pageSize: number): Promise<CashRegister[]>;
  findById(id: string): Promise<CashRegister | null>;
  create(data: CashRegisterDto): Promise<CashRegister>;
  update(id: string, data: CashRegisterDto): Promise<CashRegister | null>;
  delete(id: string): Promise<void>;
}
