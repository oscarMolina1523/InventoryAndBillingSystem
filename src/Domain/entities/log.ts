import BaseModel from "./base.model";

export default class Log extends BaseModel {
  entity: string;
  entity_id: string;
  action: string;
  description: string;
  performed_by: string;
  performed_at: Date;

  constructor({
    id,
    entity,
    entity_id,
    action,
    description,
    performed_by,
    performed_at,
  }: {
    id: string;
    entity: string;
    entity_id: string;
    action: string;
    description: string;
    performed_by: string;
    performed_at: Date;
  }) {
    super(id);
    this.entity = entity;
    this.entity_id = entity_id;
    this.action = action;
    this.description = description;
    this.performed_by = performed_by;
    this.performed_at = performed_at;
  }
}
