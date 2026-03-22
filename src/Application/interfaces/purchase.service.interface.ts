import Purchase from "../../Domain/entities/purchase";
import { PurchaseDto } from './../dtos/purchase.dto';

export interface IPurchaseService {
  findAll(page: number, pageSize: number): Promise<Purchase[]>;
  findById(id: string): Promise<Purchase | null>;
  getByCompany(companyId: string): Promise<Purchase[]>;
  create(data: PurchaseDto): Promise<Purchase>;
  update(id: string, data: PurchaseDto): Promise<Purchase | null>;
  delete(id: string): Promise<void>;
}
