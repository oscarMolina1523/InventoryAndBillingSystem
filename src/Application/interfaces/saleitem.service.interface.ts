import SaleItem from "../../Domain/entities/saleitem";
import { SaleItemDto } from './../dtos/saleitem.dto';

export interface ISaleItemService {
  findAll(page: number, pageSize: number): Promise<SaleItem[]>;
  findById(id: string): Promise<SaleItem | null>;
  getByCompany(companyId: string): Promise<SaleItem[]>;
  create(data: SaleItemDto): Promise<SaleItem>;
  update(id: string, data: SaleItemDto): Promise<SaleItem | null>;
  delete(id: string): Promise<void>;
}
