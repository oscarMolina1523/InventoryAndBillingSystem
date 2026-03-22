import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IUserService } from './../../Application/interfaces/user.service.interface';

@injectable()
export class UserController {

  private readonly _userService: IUserService;

  constructor(@inject("IUserService") service: IUserService) {
    this._userService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._userService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._userService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._userService.findById(id);
    res.json(result);
  }

  getUserByCompany = async (req: Request, res: Response) => {
    //http://localhost:3000/users/company/123

    const companyId = req.params.companyId;

    if (!companyId || typeof companyId !== "string") {
      return res.status(400).json({ message: "Invalid Company ID." });
    }

    try {
      const users = await this._userService.getByCompany(companyId);

      if (users) {
        res.status(200).json({ success: true, data: users });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch {
      res.status(500).json({ message: "Failed to get user" });
    }
  };

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._userService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._userService.delete(id);
    res.status(204).send();
  }
}
