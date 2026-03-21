export interface LogDto {
  entity: string;
  entity_id: string;
  action: string;
  description: string;
  performed_by: string;
  performed_at: Date;
}
