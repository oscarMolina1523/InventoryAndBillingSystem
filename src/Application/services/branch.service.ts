import { inject, injectable } from "tsyringe";
import { IBranchService } from "../interfaces/branch.service.interface";
import { IBranchRepository } from "../../Domain/repositories/branchRepository.interface";
import { BranchDto } from "../dtos/branch.dto";
import Branch from "../../Domain/entities/branch";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class BranchService implements IBranchService {
  private readonly _branchRepository: IBranchRepository;

  constructor(@inject("IBranchRepository") repository: IBranchRepository) {
    this._branchRepository = repository;
  }

  async findAll(page: number = 1, pageSize: number = 100): Promise<Branch[]> {
    return await this._branchRepository.findAll(page, pageSize);
  }

  async findById(id: string): Promise<Branch | null> {
    return await this._branchRepository.findById(id);
  }

  async getByCompany(companyId: string): Promise<Branch[]> {
    return await this._branchRepository.findByField("company_id", companyId);
  }

  async create(data: BranchDto): Promise<Branch> {
    const now = new Date();
    const newData: Branch = {
      ...data,
      id: generateId(),
      createdAt: now,
      updatedAt: now,
      createdBy: "system",
      updatedBy: "system",
    };
    await this._branchRepository.create(newData);
    return newData;
  }

  async update(id: string, data: BranchDto): Promise<Branch | null> {
    const existing = await this._branchRepository.findById(id);
    if (!existing) {
      return null;
    }

    const now = new Date();
    const newData: Branch = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now,
      createdBy: "system",
      updatedBy: "system",
    };
    await this._branchRepository.update(newData);
    return newData;
  }

  async delete(id: string): Promise<void> {
    const existing = await this._branchRepository.findById(id);
    if (!existing) {
      return;
    }
    return await this._branchRepository.delete(existing);
  }
}
