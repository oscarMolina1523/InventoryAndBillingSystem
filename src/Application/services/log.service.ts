import { inject, injectable } from "tsyringe";
import { ILogService } from "../interfaces/log.service.interface";
import { ILogRepository } from "../../Domain/repositories/logRepository.interface";
import { LogDto } from "../dtos/log.dto";
import Log from "../../Domain/entities/log";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class LogService implements ILogService {
  private readonly _logRepository: ILogRepository;

  constructor(@inject("ILogRepository") repository: ILogRepository) {
    this._logRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Log[]> {
    return await this._logRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Log | null> {
    return await this._logRepository.findById(id);
  }
  
  async create(data: LogDto): Promise<Log> {
    const newData: Log = {
      ...data,
      id: generateId(), 
    }
    await this._logRepository.create(newData);
    return newData;
  }

  async update(id: string, data: LogDto): Promise<Log | null> {
    const existing = await this._logRepository.findById(id);
    if (!existing) {
      return null;
    }
    
    const newData: Log = {
      ...data,
      id, 
    }
    await this._logRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._logRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._logRepository.delete(existing);
  }
}
