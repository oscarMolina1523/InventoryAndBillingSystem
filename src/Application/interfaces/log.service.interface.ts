import Log from "../../Domain/entities/log";
import { LogDto } from './../dtos/log.dto';

export interface ILogService {
  findAll(page: number, pageSize: number): Promise<Log[]>;
  findById(id: string): Promise<Log | null>;
  create(data: LogDto): Promise<Log>;
  update(id: string, data: LogDto): Promise<Log | null>;
  delete(id: string): Promise<void>;
}
