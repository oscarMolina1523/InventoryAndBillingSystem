import Sale from '../entities/sale';

export interface ISaleRepository {
  findAll(page: number, pageSize: number): Promise<Sale[]>;
  findById(id: string): Promise<Sale | null>;
  create(data: Sale): Promise<void>;
  update(data: Sale): Promise<void>;
  delete(data: Sale): Promise<void>;
}
