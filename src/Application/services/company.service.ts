import { inject, injectable } from "tsyringe";
import { ICompanyService } from "../interfaces/company.service.interface";
import { ICompanyRepository } from "../../Domain/repositories/companyRepository.interface";
import { CompanyDto } from "../dtos/company.dto";
import Company from "../../Domain/entities/company";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class CompanyService implements ICompanyService {
  private readonly _companyRepository: ICompanyRepository;

  constructor(@inject("ICompanyRepository") repository: ICompanyRepository) {
    this._companyRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Company[]> {
    return await this._companyRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Company | null> {
    return await this._companyRepository.findById(id);
  }
  
  async create(data: CompanyDto): Promise<Company> {
    const now = new Date();
    const newData: Company = {
      ...data,
      id: generateId(), 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._companyRepository.create(newData);
    return newData;
  }

  async update(id: string, data: CompanyDto): Promise<Company | null> {
    const existing = await this._companyRepository.findById(id);
    if (!existing) {
      return null;
    }

    const now = new Date();
    const newData: Company = {
      ...data,
      id, 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._companyRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._companyRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._companyRepository.delete(existing);
  }
}
