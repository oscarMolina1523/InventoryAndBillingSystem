import { inject, injectable } from "tsyringe";
import { ISaleService } from "../interfaces/sale.service.interface";
import { ISaleRepository } from "../../Domain/repositories/saleRepository.interface";
import { SaleDto } from "../dtos/sale.dto";
import Sale from "../../Domain/entities/sale";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class SaleService implements ISaleService {
  private readonly _saleRepository: ISaleRepository;

  constructor(@inject("ISaleRepository") repository: ISaleRepository) {
    this._saleRepository = repository;
  }

  async findAll(page: number = 1, pageSize: number = 100): Promise<Sale[]> {
    return await this._saleRepository.findAll(page, pageSize);
  }

  async findById(id: string): Promise<Sale | null> {
    return await this._saleRepository.findById(id);
  }

  async getByCompany(companyId: string): Promise<Sale[]> {
    return await this._saleRepository.findByField("company_id", companyId);
  }

  async create(data: SaleDto): Promise<Sale> {
    const now = new Date();
    const newData: Sale = {
      ...data,
      id: generateId(),
      createdAt: now,
      updatedAt: now,
      createdBy: "system",
      updatedBy: "system",
    };
    await this._saleRepository.create(newData);
    return newData;
  }

  async update(id: string, data: SaleDto): Promise<Sale | null> {
    const existing = await this._saleRepository.findById(id);
    if (!existing) {
      return null;
    }

    const now = new Date();
    const newData: Sale = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now,
      createdBy: "system",
      updatedBy: "system",
    };
    await this._saleRepository.update(newData);
    return newData;
  }

  async delete(id: string): Promise<void> {
    const existing = await this._saleRepository.findById(id);
    if (!existing) {
      return;
    }
    return await this._saleRepository.delete(existing);
  }
}
