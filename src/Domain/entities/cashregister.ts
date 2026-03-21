import BaseModel from "./base.model";

export default class CashRegister extends BaseModel {
  company_id: string;
  branch_id: string;
  name: string;
  is_active: boolean;
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;

  constructor({
    id,
    company_id,
    branch_id,
    name,
    is_active,
    deleted,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: {
    id: string;
    company_id: string;
    branch_id: string;
    name: string;
    is_active: boolean;
    deleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }) {
    super(id);
    this.company_id = company_id;
    this.branch_id = branch_id;
    this.name = name;
    this.is_active = is_active;
    this.deleted = deleted;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}
