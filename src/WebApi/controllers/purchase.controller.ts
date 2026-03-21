import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IPurchaseService } from './../../Application/interfaces/purchase.service.interface';

@injectable()
export class PurchaseController {

  private readonly _purchaseService: IPurchaseService;

  constructor(@inject("IPurchaseService") service: IPurchaseService) {
    this._purchaseService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._purchaseService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._purchaseService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._purchaseService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._purchaseService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._purchaseService.delete(id);
    res.status(204).send();
  }
}
