export interface PurchaseDto {
  company_id: string;
  branch_id: string;
  supplier: string;
  total: number;
  status: string;
  deleted: boolean;
}
