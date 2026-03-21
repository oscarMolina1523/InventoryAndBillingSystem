import Branch from '../entities/branch';

export interface IBranchRepository {
  findAll(page: number, pageSize: number): Promise<Branch[]>;
  findById(id: string): Promise<Branch | null>;
  create(data: Branch): Promise<void>;
  update(data: Branch): Promise<void>;
  delete(data: Branch): Promise<void>;
}
