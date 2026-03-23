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

  getSalesByCompany = async (req: Request, res: Response) => {
    //http://localhost:3000/users/company/123

    const companyId = req.params.companyId;

    if (!companyId || typeof companyId !== "string") {
      return res.status(400).json({ message: "Invalid Company ID." });
    }

    try {
      const sales = await this._saleService.getByCompany(companyId);

      if (sales) {
        res.status(200).json({ success: true, data: sales });
      } else {
        res.status(404).json({ message: "Sales not found" });
      }
    } catch {
      res.status(500).json({ message: "Failed to get sales" });
    }
  };

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
