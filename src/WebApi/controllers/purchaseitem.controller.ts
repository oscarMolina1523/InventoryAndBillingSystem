import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IPurchaseItemService } from './../../Application/interfaces/purchaseitem.service.interface';

@injectable()
export class PurchaseItemController {

  private readonly _purchaseitemService: IPurchaseItemService;

  constructor(@inject("IPurchaseItemService") service: IPurchaseItemService) {
    this._purchaseitemService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._purchaseitemService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._purchaseitemService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._purchaseitemService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._purchaseitemService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._purchaseitemService.delete(id);
    res.status(204).send();
  }
}
