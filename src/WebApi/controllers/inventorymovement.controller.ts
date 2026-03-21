import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IInventoryMovementService } from './../../Application/interfaces/inventorymovement.service.interface';

@injectable()
export class InventoryMovementController {

  private readonly _inventorymovementService: IInventoryMovementService;

  constructor(@inject("IInventoryMovementService") service: IInventoryMovementService) {
    this._inventorymovementService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._inventorymovementService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._inventorymovementService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._inventorymovementService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._inventorymovementService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._inventorymovementService.delete(id);
    res.status(204).send();
  }
}
