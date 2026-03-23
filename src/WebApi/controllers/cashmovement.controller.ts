import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { ICashMovementService } from './../../Application/interfaces/cashmovement.service.interface';

@injectable()
export class CashMovementController {

  private readonly _cashmovementService: ICashMovementService;

  constructor(@inject("ICashMovementService") service: ICashMovementService) {
    this._cashmovementService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._cashmovementService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._cashmovementService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._cashmovementService.findById(id);
    res.json(result);
  }

  getCashMovementByCompany = async (req: Request, res: Response) => {
    //http://localhost:3000/users/company/123

    const companyId = req.params.companyId;

    if (!companyId || typeof companyId !== "string") {
      return res.status(400).json({ message: "Invalid Company ID." });
    }

    try {
      const cashMovements = await this._cashmovementService.getByCompany(companyId);

      if (cashMovements) {
        res.status(200).json({ success: true, data: cashMovements });
      } else {
        res.status(404).json({ message: "Cash movement not found" });
      }
    } catch {
      res.status(500).json({ message: "Failed to get cash movement" });
    }
  };


  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._cashmovementService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._cashmovementService.delete(id);
    res.status(204).send();
  }
}
