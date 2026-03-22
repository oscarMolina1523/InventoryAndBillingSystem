import Role from '../entities/role';

export interface IRoleRepository {
  findAll(page: number, pageSize: number): Promise<Role[]>;
  findById(id: string): Promise<Role | null>;
  findByField(field: string, value: string): Promise<Role[]>;
  create(data: Role): Promise<void>;
  update(data: Role): Promise<void>;
  delete(data: Role): Promise<void>;
}
