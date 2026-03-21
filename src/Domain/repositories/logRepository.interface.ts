import Log from '../entities/log';

export interface ILogRepository {
  findAll(page: number, pageSize: number): Promise<Log[]>;
  findById(id: string): Promise<Log | null>;
  create(data: Log): Promise<void>;
  update(data: Log): Promise<void>;
  delete(data: Log): Promise<void>;
}
