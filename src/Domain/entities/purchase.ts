import BaseModel from "./base.model";

export default class Purchase extends BaseModel {
  company_id: string;
  branch_id: string;
  supplier: string;
  total: number;
  status: string;
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;

  constructor({
    id,
    company_id,
    branch_id,
    supplier,
    total,
    status,
    deleted,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: {
    id: string;
    company_id: string;
    branch_id: string;
    supplier: string;
    total: number;
    status: string;
    deleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }) {
    super(id);
    this.company_id = company_id;
    this.branch_id = branch_id;
    this.supplier = supplier;
    this.total = total;
    this.status = status;
    this.deleted = deleted;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}
