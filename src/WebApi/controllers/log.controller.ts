import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { ILogService } from './../../Application/interfaces/log.service.interface';

@injectable()
export class LogController {

  private readonly _logService: ILogService;

  constructor(@inject("ILogService") service: ILogService) {
    this._logService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._logService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._logService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._logService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._logService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._logService.delete(id);
    res.status(204).send();
  }
}
