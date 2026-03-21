import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { ISaleService } from './../../Application/interfaces/sale.service.interface';

@injectable()
export class SaleController {

  private readonly _saleService: ISaleService;

  constructor(@inject("ISaleService") service: ISaleService) {
    this._saleService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._saleService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._saleService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._saleService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._saleService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._saleService.delete(id);
    res.status(204).send();
  }
}
