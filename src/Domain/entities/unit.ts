import BaseModel from "./base.model";

export default class Unit extends BaseModel {
  name: string;
  symbol: string;
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;

  constructor({
    id,
    name,
    symbol,
    deleted,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: {
    id: string;
    name: string;
    symbol: string;
    deleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }) {
    super(id);
    this.name = name;
    this.symbol = symbol;
    this.deleted = deleted;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}
