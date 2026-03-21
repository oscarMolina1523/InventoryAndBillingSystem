import ProductUnit from '../entities/productunit';

export interface IProductUnitRepository {
  findAll(page: number, pageSize: number): Promise<ProductUnit[]>;
  findById(id: string): Promise<ProductUnit | null>;
  create(data: ProductUnit): Promise<void>;
  update(data: ProductUnit): Promise<void>;
  delete(data: ProductUnit): Promise<void>;
}
