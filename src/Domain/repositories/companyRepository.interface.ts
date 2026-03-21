import Company from '../entities/company';

export interface ICompanyRepository {
  findAll(page: number, pageSize: number): Promise<Company[]>;
  findById(id: string): Promise<Company | null>;
  create(data: Company): Promise<void>;
  update(data: Company): Promise<void>;
  delete(data: Company): Promise<void>;
}
