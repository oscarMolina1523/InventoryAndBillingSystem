import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { ISaleItemService } from './../../Application/interfaces/saleitem.service.interface';

@injectable()
export class SaleItemController {

  private readonly _saleitemService: ISaleItemService;

  constructor(@inject("ISaleItemService") service: ISaleItemService) {
    this._saleitemService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._saleitemService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._saleitemService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._saleitemService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._saleitemService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._saleitemService.delete(id);
    res.status(204).send();
  }
}
