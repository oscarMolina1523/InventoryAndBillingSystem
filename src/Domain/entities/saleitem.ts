import BaseModel from "./base.model";

export default class SaleItem extends BaseModel {
  company_id: string;
  sale_id: string;
  product_id: string;
  unit_id: string;
  quantity: number;
  price: number;
  subtotal: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;

  constructor({
    id,
    company_id,
    sale_id,
    product_id,
    unit_id,
    quantity,
    price,
    subtotal,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: {
    id: string;
    company_id: string;
    sale_id: string;
    product_id: string;
    unit_id: string;
    quantity: number;
    price: number;
    subtotal: number;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }) {
    super(id);
    this.company_id = company_id;
    this.sale_id = sale_id;
    this.product_id = product_id;
    this.unit_id = unit_id;
    this.quantity = quantity;
    this.price = price;
    this.subtotal = subtotal;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}
