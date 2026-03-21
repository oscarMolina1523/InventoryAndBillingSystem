import Company from "../../Domain/entities/company";
import { CompanyDto } from './../dtos/company.dto';

export interface ICompanyService {
  findAll(page: number, pageSize: number): Promise<Company[]>;
  findById(id: string): Promise<Company | null>;
  create(data: CompanyDto): Promise<Company>;
  update(id: string, data: CompanyDto): Promise<Company | null>;
  delete(id: string): Promise<void>;
}
