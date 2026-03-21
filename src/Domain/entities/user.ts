import BaseModel from "./base.model";

export default class User extends BaseModel {
  company_id: string;
  name: string;
  email: string;
  password: string;
  role_id: string;
  is_active: boolean;
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;

  constructor({
    id,
    company_id,
    name,
    email,
    password,
    role_id,
    is_active,
    deleted,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: {
    id: string;
    company_id: string;
    name: string;
    email: string;
    password: string;
    role_id: string;
    is_active: boolean;
    deleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }) {
    super(id);
    this.company_id = company_id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role_id = role_id;
    this.is_active = is_active;
    this.deleted = deleted;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}
