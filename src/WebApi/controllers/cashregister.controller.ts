import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { ICashRegisterService } from './../../Application/interfaces/cashregister.service.interface';

@injectable()
export class CashRegisterController {

  private readonly _cashregisterService: ICashRegisterService;

  constructor(@inject("ICashRegisterService") service: ICashRegisterService) {
    this._cashregisterService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._cashregisterService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._cashregisterService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._cashregisterService.findById(id);
    res.json(result);
  }

  getCashRegisterByCompany = async (req: Request, res: Response) => {
    //http://localhost:3000/users/company/123

    const companyId = req.params.companyId;

    if (!companyId || typeof companyId !== "string") {
      return res.status(400).json({ message: "Invalid Company ID." });
    }

    try {
      const cashRegisters = await this._cashregisterService.getByCompany(companyId);

      if (cashRegisters) {
        res.status(200).json({ success: true, data: cashRegisters });
      } else {
        res.status(404).json({ message: "Cash register not found" });
      }
    } catch {
      res.status(500).json({ message: "Failed to get cash register" });
    }
  };


  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._cashregisterService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._cashregisterService.delete(id);
    res.status(204).send();
  }
}
