import Purchase from '../entities/purchase';

export interface IPurchaseRepository {
  findAll(page: number, pageSize: number): Promise<Purchase[]>;
  findById(id: string): Promise<Purchase | null>;
  create(data: Purchase): Promise<void>;
  update(data: Purchase): Promise<void>;
  delete(data: Purchase): Promise<void>;
}
