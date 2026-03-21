import BaseModel from "./base.model";

export default class CashMovement extends BaseModel {
  company_id: string;
  cash_register_id: string;
  type: string;
  amount: number;
  description: string;
  reference_id: string;
  payment_method: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
  deleted: boolean;

  constructor({
    id,
    company_id,
    cash_register_id,
    type,
    amount,
    description,
    reference_id,
    payment_method,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
    deleted
  }: {
    id: string;
    company_id: string;
    cash_register_id: string;
    type: string;
    amount: number;
    description: string;
    reference_id: string;
    payment_method: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
    deleted: boolean;
  }) {
    super(id);
    this.company_id = company_id;
    this.cash_register_id = cash_register_id;
    this.type = type;
    this.amount = amount;
    this.description = description;
    this.reference_id = reference_id;
    this.payment_method = payment_method;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
    this.deleted = deleted;
  }
}
