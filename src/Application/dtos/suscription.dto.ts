export interface SuscriptionDto {
  company_id: string;
  plan_id: string;
  status: string;
  current_period_start: Date;
  current_period_end: Date;
  deleted: boolean;
}
