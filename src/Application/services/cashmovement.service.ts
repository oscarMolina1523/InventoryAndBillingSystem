import { inject, injectable } from "tsyringe";
import { ICashMovementService } from "../interfaces/cashmovement.service.interface";
import { ICashMovementRepository } from "../../Domain/repositories/cashmovementRepository.interface";
import { CashMovementDto } from "../dtos/cashmovement.dto";
import CashMovement from "../../Domain/entities/cashmovement";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class CashMovementService implements ICashMovementService {
  private readonly _cashmovementRepository: ICashMovementRepository;

  constructor(
    @inject("ICashMovementRepository") repository: ICashMovementRepository,
  ) {
    this._cashmovementRepository = repository;
  }

  async findAll(
    page: number = 1,
    pageSize: number = 100,
  ): Promise<CashMovement[]> {
    return await this._cashmovementRepository.findAll(page, pageSize);
  }

  async findById(id: string): Promise<CashMovement | null> {
    return await this._cashmovementRepository.findById(id);
  }

  async getByCompany(companyId: string): Promise<CashMovement[]> {
    return await this._cashmovementRepository.findByField(
      "company_id",
      companyId,
    );
  }

  async create(data: CashMovementDto): Promise<CashMovement> {
    const now = new Date();
    const newData: CashMovement = {
      ...data,
      id: generateId(),
      createdAt: now,
      updatedAt: now,
      createdBy: "system",
      updatedBy: "system",
    };
    await this._cashmovementRepository.create(newData);
    return newData;
  }

  async update(
    id: string,
    data: CashMovementDto,
  ): Promise<CashMovement | null> {
    const existing = await this._cashmovementRepository.findById(id);
    if (!existing) {
      return null;
    }

    const now = new Date();
    const newData: CashMovement = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now,
      createdBy: "system",
      updatedBy: "system",
    };
    await this._cashmovementRepository.update(newData);
    return newData;
  }

  async delete(id: string): Promise<void> {
    const existing = await this._cashmovementRepository.findById(id);
    if (!existing) {
      return;
    }
    return await this._cashmovementRepository.delete(existing);
  }
}
