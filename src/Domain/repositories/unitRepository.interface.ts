import Unit from '../entities/unit';

export interface IUnitRepository {
  findAll(page: number, pageSize: number): Promise<Unit[]>;
  findById(id: string): Promise<Unit | null>;
  create(data: Unit): Promise<void>;
  update(data: Unit): Promise<void>;
  delete(data: Unit): Promise<void>;
}
