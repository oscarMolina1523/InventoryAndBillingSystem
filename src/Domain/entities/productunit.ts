import BaseModel from "./base.model";

export default class ProductUnit extends BaseModel {
  product_id: string;
  unit_id: string;
  factor: number;
  is_base: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;

  constructor({
    id,
    product_id,
    unit_id,
    factor,
    is_base,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: {
    id: string;
    product_id: string;
    unit_id: string;
    factor: number;
    is_base: boolean;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }) {
    super(id);
    this.product_id = product_id;
    this.unit_id = unit_id;
    this.factor = factor;
    this.is_base = is_base;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}
