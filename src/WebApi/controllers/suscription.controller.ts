import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { ISuscriptionService } from './../../Application/interfaces/suscription.service.interface';

@injectable()
export class SuscriptionController {

  private readonly _suscriptionService: ISuscriptionService;

  constructor(@inject("ISuscriptionService") service: ISuscriptionService) {
    this._suscriptionService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._suscriptionService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._suscriptionService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._suscriptionService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._suscriptionService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._suscriptionService.delete(id);
    res.status(204).send();
  }
}
