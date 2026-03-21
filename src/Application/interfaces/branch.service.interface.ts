import Branch from "../../Domain/entities/branch";
import { BranchDto } from './../dtos/branch.dto';

export interface IBranchService {
  findAll(page: number, pageSize: number): Promise<Branch[]>;
  findById(id: string): Promise<Branch | null>;
  getByCompany(companyId: string): Promise<Branch | null>;
  create(data: BranchDto): Promise<Branch>;
  update(id: string, data: BranchDto): Promise<Branch | null>;
  delete(id: string): Promise<void>;
}
