import BaseModel from "./base.model";

export default class Sale extends BaseModel {
  company_id: string;
  branch_id: string;
  user_id: string;
  customer_name: string;
  total: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
  deleted: boolean;

  constructor({
    id,
    company_id,
    branch_id,
    user_id,
    customer_name,
    total,
    status,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
    deleted,
  }: {
    id: string;
    company_id: string;
    branch_id: string;
    user_id: string;
    customer_name: string;
    total: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
    deleted: boolean;
  }) {
    super(id);
    this.company_id = company_id;
    this.branch_id = branch_id;
    this.user_id = user_id;
    this.customer_name = customer_name;
    this.total = total;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
    this.deleted = deleted;
  }
}
