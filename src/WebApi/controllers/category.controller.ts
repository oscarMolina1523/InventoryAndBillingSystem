import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { ICategoryService } from './../../Application/interfaces/category.service.interface';

@injectable()
export class CategoryController {

  private readonly _categoryService: ICategoryService;

  constructor(@inject("ICategoryService") service: ICategoryService) {
    this._categoryService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._categoryService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._categoryService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._categoryService.findById(id);
    res.json(result);
  }

  getCategoryByCompany = async (req: Request, res: Response) => {
    //http://localhost:3000/users/company/123

    const companyId = req.params.companyId;

    if (!companyId || typeof companyId !== "string") {
      return res.status(400).json({ message: "Invalid Company ID." });
    }

    try {
      const product = await this._categoryService.getByCompany(companyId);

      if (product) {
        res.status(200).json({ success: true, data: product });
      } else {
        res.status(404).json({ message: "Category not found" });
      }
    } catch {
      res.status(500).json({ message: "Failed to get category" });
    }
  };

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._categoryService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._categoryService.delete(id);
    res.status(204).send();
  }
}
