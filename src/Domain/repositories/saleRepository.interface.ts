import Sale from '../entities/sale';

export interface ISaleRepository {
  findAll(page: number, pageSize: number): Promise<Sale[]>;
  findById(id: string): Promise<Sale | null>;
  findByField(field: string, value: string): Promise<Sale[]>;
  create(data: Sale): Promise<void>;
  update(data: Sale): Promise<void>;
  delete(data: Sale): Promise<void>;
}
