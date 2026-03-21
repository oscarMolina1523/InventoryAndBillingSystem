import BaseModel from "./base.model";

export default class Company extends BaseModel {
  name: string;
  business_type: string;
  tax_id: string;
  email: string;
  phone: string;
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;

  constructor({
    id,
    name,
    business_type,
    tax_id,
    email,
    phone,
    deleted,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: {
    id: string;
    name: string;
    business_type: string;
    tax_id: string;
    email: string;
    phone: string;
    deleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }) {
    super(id);
    this.name = name;
    this.business_type = business_type;
    this.tax_id = tax_id;
    this.email = email;
    this.phone = phone;
    this.deleted = deleted;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}
