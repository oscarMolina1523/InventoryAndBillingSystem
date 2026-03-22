import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IProductService } from "./../../Application/interfaces/product.service.interface";

@injectable()
export class ProductController {
  private readonly _productService: IProductService;

  constructor(@inject("IProductService") service: IProductService) {
    this._productService = service;
  }

  getAll = async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._productService.findAll(page, pageSize);
    res.json(result);
  };

  create = async (req: Request, res: Response) => {
    const result = await this._productService.create(req.body);
    res.status(201).json(result);
  };

  getById = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const result = await this._productService.findById(id);
    res.json(result);
  };

  getProductByCompany = async (req: Request, res: Response) => {
    //http://localhost:3000/users/company/123

    const companyId = req.params.companyId;

    if (!companyId || typeof companyId !== "string") {
      return res.status(400).json({ message: "Invalid Company ID." });
    }

    try {
      const products = await this._productService.getByCompany(companyId);

      if (products) {
        res.status(200).json({ success: true, data: products });
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    } catch {
      res.status(500).json({ message: "Failed to get product" });
    }
  };

  update = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const result = await this._productService.update(id, req.body);
    res.json(result);
  };

  delete = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    await this._productService.delete(id);
    res.status(204).send();
  };
}
