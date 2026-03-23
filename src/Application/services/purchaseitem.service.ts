import { inject, injectable } from "tsyringe";
import { IPurchaseItemService } from "../interfaces/purchaseitem.service.interface";
import { IPurchaseItemRepository } from "../../Domain/repositories/purchaseitemRepository.interface";
import { PurchaseItemDto } from "../dtos/purchaseitem.dto";
import PurchaseItem from "../../Domain/entities/purchaseitem";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class PurchaseItemService implements IPurchaseItemService {
  private readonly _purchaseitemRepository: IPurchaseItemRepository;

  constructor(
    @inject("IPurchaseItemRepository") repository: IPurchaseItemRepository,
  ) {
    this._purchaseitemRepository = repository;
  }

  async findAll(
    page: number = 1,
    pageSize: number = 100,
  ): Promise<PurchaseItem[]> {
    return await this._purchaseitemRepository.findAll(page, pageSize);
  }

  async findById(id: string): Promise<PurchaseItem | null> {
    return await this._purchaseitemRepository.findById(id);
  }

  async getByCompany(companyId: string): Promise<PurchaseItem[]> {
    return await this._purchaseitemRepository.findByField(
      "company_id",
      companyId,
    );
  }

  async create(data: PurchaseItemDto): Promise<PurchaseItem> {
    const newData: PurchaseItem = {
      ...data,
      id: generateId(),
    };
    await this._purchaseitemRepository.create(newData);
    return newData;
  }

  async update(
    id: string,
    data: PurchaseItemDto,
  ): Promise<PurchaseItem | null> {
    const existing = await this._purchaseitemRepository.findById(id);
    if (!existing) {
      return null;
    }
    const newData: PurchaseItem = {
      ...data,
      id,
    };
    await this._purchaseitemRepository.update(newData);
    return newData;
  }

  async delete(id: string): Promise<void> {
    const existing = await this._purchaseitemRepository.findById(id);
    if (!existing) {
      return;
    }
    return await this._purchaseitemRepository.delete(existing);
  }
}
