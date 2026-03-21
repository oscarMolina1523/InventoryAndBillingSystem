import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IUnitService } from './../../Application/interfaces/unit.service.interface';

@injectable()
export class UnitController {

  private readonly _unitService: IUnitService;

  constructor(@inject("IUnitService") service: IUnitService) {
    this._unitService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._unitService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._unitService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._unitService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._unitService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._unitService.delete(id);
    res.status(204).send();
  }
}
