import { inject, injectable } from "tsyringe";
import { ICashRegisterService } from "../interfaces/cashregister.service.interface";
import { ICashRegisterRepository } from "../../Domain/repositories/cashregisterRepository.interface";
import { CashRegisterDto } from "../dtos/cashregister.dto";
import CashRegister from "../../Domain/entities/cashregister";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class CashRegisterService implements ICashRegisterService {
  private readonly _cashregisterRepository: ICashRegisterRepository;

  constructor(
    @inject("ICashRegisterRepository") repository: ICashRegisterRepository,
  ) {
    this._cashregisterRepository = repository;
  }

  async findAll(
    page: number = 1,
    pageSize: number = 100,
  ): Promise<CashRegister[]> {
    return await this._cashregisterRepository.findAll(page, pageSize);
  }

  async findById(id: string): Promise<CashRegister | null> {
    return await this._cashregisterRepository.findById(id);
  }

  async getByCompany(companyId: string): Promise<CashRegister[]> {
    return await this._cashregisterRepository.findByField(
      "company_id",
      companyId,
    );
  }

  async create(data: CashRegisterDto): Promise<CashRegister> {
    const now = new Date();
    const newData: CashRegister = {
      ...data,
      id: generateId(),
      createdAt: now,
      updatedAt: now,
      createdBy: "system",
      updatedBy: "system",
    };
    await this._cashregisterRepository.create(newData);
    return newData;
  }

  async update(
    id: string,
    data: CashRegisterDto,
  ): Promise<CashRegister | null> {
    const existing = await this._cashregisterRepository.findById(id);
    if (!existing) {
      return null;
    }

    const now = new Date();
    const newData: CashRegister = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now,
      createdBy: "system",
      updatedBy: "system",
    };
    await this._cashregisterRepository.update(newData);
    return newData;
  }

  async delete(id: string): Promise<void> {
    const existing = await this._cashregisterRepository.findById(id);
    if (!existing) {
      return;
    }
    return await this._cashregisterRepository.delete(existing);
  }
}
