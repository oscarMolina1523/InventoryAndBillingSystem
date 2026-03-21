export interface CashMovementDto {
  company_id: string;
  cash_register_id: string;
  type: string;
  amount: number;
  description: string;
  reference_id: string;
  payment_method: string;
  deleted:boolean;
}
