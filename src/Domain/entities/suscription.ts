import BaseModel from "./base.model";

export default class Suscription extends BaseModel {
  company_id: string;
  plan_id: string;
  status: string;
  current_period_start: Date;
  current_period_end: Date;
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;

  constructor({
    id,
    company_id,
    plan_id,
    status,
    current_period_start,
    current_period_end,
    deleted,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: {
    id: string;
    company_id: string;
    plan_id: string;
    status: string;
    current_period_start: Date;
    current_period_end: Date;
    deleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }) {
    super(id);
    this.company_id = company_id;
    this.plan_id = plan_id;
    this.status = status;
    this.current_period_start = current_period_start;
    this.current_period_end = current_period_end;
    this.deleted = deleted;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}
