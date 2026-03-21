import PurchaseItem from '../entities/purchaseitem';

export interface IPurchaseItemRepository {
  findAll(page: number, pageSize: number): Promise<PurchaseItem[]>;
  findById(id: string): Promise<PurchaseItem | null>;
  create(data: PurchaseItem): Promise<void>;
  update(data: PurchaseItem): Promise<void>;
  delete(data: PurchaseItem): Promise<void>;
}
