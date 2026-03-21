import BaseModel from "./base.model";

export default class PurchaseItem extends BaseModel {
  company_id: string;
  purchase_id: string;
  product_id: string;
  unit_id: string;
  quantity: number;
  cost_price: number;
  subtotal: number;

  constructor({
    id,
    company_id,
    purchase_id,
    product_id,
    unit_id,
    quantity,
    cost_price,
    subtotal,
  }: {
    id: string;
    company_id: string;
    purchase_id: string;
    product_id: string;
    unit_id: string;
    quantity: number;
    cost_price: number;
    subtotal: number;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }) {
    super(id);
    this.company_id = company_id;
    this.purchase_id = purchase_id;
    this.product_id = product_id;
    this.unit_id = unit_id;
    this.quantity = quantity;
    this.cost_price = cost_price;
    this.subtotal = subtotal;
  }
}
