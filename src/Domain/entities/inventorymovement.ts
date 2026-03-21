import BaseModel from "./base.model";

export default class InventoryMovement extends BaseModel {
  company_id: string;
  branch_id: string;
  product_id: string;
  type: string;
  quantity: number;
  reference_type: string;
  reference_id: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;

  constructor({
    id,
    company_id,
    branch_id,
    product_id,
    type,
    quantity,
    reference_type,
    reference_id,
    description,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: {
    id: string;
    company_id: string;
    branch_id: string;
    product_id: string;
    type: string;
    quantity: number;
    reference_type: string;
    reference_id: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }) {
    super(id);
    this.company_id = company_id;
    this.branch_id = branch_id;
    this.product_id = product_id;
    this.type = type;
    this.quantity = quantity;
    this.reference_type = reference_type;
    this.reference_id = reference_id;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}
