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

  getPurchaseItemsByCompany = async (req: Request, res: Response) => {
    //http://localhost:3000/users/company/123

    const companyId = req.params.companyId;

    if (!companyId || typeof companyId !== "string") {
      return res.status(400).json({ message: "Invalid Company ID." });
    }

    try {
      const purchaseItems = await this._purchaseitemService.getByCompany(companyId);

      if (purchaseItems) {
        res.status(200).json({ success: true, data: purchaseItems });
      } else {
        res.status(404).json({ message: "Purchase item not found" });
      }
    } catch {
      res.status(500).json({ message: "Failed to get purchase item" });
    }
  };

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
