import SaleItem from '../entities/saleitem';

export interface ISaleItemRepository {
  findAll(page: number, pageSize: number): Promise<SaleItem[]>;
  findById(id: string): Promise<SaleItem | null>;
  findByField(field: string, value: string): Promise<SaleItem[]>;
  create(data: SaleItem): Promise<void>;
  update(data: SaleItem): Promise<void>;
  delete(data: SaleItem): Promise<void>;
}
