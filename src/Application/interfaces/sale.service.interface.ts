import Sale from "../../Domain/entities/sale";
import { SaleDto } from "./../dtos/sale.dto";

export interface ISaleService {
  findAll(page: number, pageSize: number): Promise<Sale[]>;
  findById(id: string): Promise<Sale | null>;
  getByCompany(companyId: string): Promise<Sale[]>;
  create(data: SaleDto): Promise<Sale>;
  update(id: string, data: SaleDto): Promise<Sale | null>;
  delete(id: string): Promise<void>;
}
