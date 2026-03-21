import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IPlanService } from './../../Application/interfaces/plan.service.interface';

@injectable()
export class PlanController {

  private readonly _planService: IPlanService;

  constructor(@inject("IPlanService") service: IPlanService) {
    this._planService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._planService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._planService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._planService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._planService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._planService.delete(id);
    res.status(204).send();
  }
}
