import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IBranchService } from './../../Application/interfaces/branch.service.interface';

@injectable()
export class BranchController {

  private readonly _branchService: IBranchService;

  constructor(@inject("IBranchService") service: IBranchService) {
    this._branchService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._branchService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._branchService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._branchService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._branchService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._branchService.delete(id);
    res.status(204).send();
  }
}
