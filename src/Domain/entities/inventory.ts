import BaseModel from "./base.model";

export default class Inventory extends BaseModel {
  company_id: string;
  branch_id: string;
  product_id: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;

  constructor({
    id,
    company_id,
    branch_id,
    product_id,
    quantity,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: {
    id: string;
    company_id: string;
    branch_id: string;
    product_id: string;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }) {
    super(id);
    this.company_id = company_id;
    this.branch_id = branch_id;
    this.product_id = product_id;
    this.quantity = quantity;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}
