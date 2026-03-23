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

  getSaleItemByCompany = async (req: Request, res: Response) => {
    //http://localhost:3000/users/company/123

    const companyId = req.params.companyId;

    if (!companyId || typeof companyId !== "string") {
      return res.status(400).json({ message: "Invalid Company ID." });
    }

    try {
      const saleItems = await this._saleitemService.getByCompany(companyId);

      if (saleItems) {
        res.status(200).json({ success: true, data: saleItems });
      } else {
        res.status(404).json({ message: "Sale item not found" });
      }
    } catch {
      res.status(500).json({ message: "Failed to get sale item" });
    }
  };

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
