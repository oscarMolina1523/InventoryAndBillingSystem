import BaseModel from "./base.model";

export default class Product extends BaseModel {
  company_id: string;
  name: string;
  barcode: string;
  category_id: string;
  unit_id: string;
  cost_price: number;
  sale_price: number;
  track_inventory: boolean;
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;

  constructor({
    id,
    company_id,
    name,
    barcode,
    category_id,
    unit_id,
    cost_price,
    sale_price,
    track_inventory,
    deleted,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: {
    id: string;
    company_id: string;
    name: string;
    barcode: string;
    category_id: string;
    unit_id: string;
    cost_price: number;
    sale_price: number;
    track_inventory: boolean;
    deleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }) {
    super(id);
    this.company_id = company_id;
    this.name = name;
    this.barcode = barcode;
    this.category_id = category_id;
    this.unit_id = unit_id;
    this.cost_price = cost_price;
    this.sale_price = sale_price;
    this.track_inventory = track_inventory;
    this.deleted = deleted;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}
