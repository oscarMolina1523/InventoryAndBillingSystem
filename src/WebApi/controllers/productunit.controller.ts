import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IProductUnitService } from './../../Application/interfaces/productunit.service.interface';

@injectable()
export class ProductUnitController {

  private readonly _productunitService: IProductUnitService;

  constructor(@inject("IProductUnitService") service: IProductUnitService) {
    this._productunitService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._productunitService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._productunitService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._productunitService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._productunitService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._productunitService.delete(id);
    res.status(204).send();
  }
}
