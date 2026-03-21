import BaseModel from "./base.model";

export default class Plan extends BaseModel {
  name: string;
  price: number;
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;

  constructor({
    id,
    name,
    price,
    deleted,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: {
    id: string;
    name: string;
    price: number;
    deleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }) {
    super(id);
    this.name = name;
    this.price = price;
    this.deleted = deleted;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}
