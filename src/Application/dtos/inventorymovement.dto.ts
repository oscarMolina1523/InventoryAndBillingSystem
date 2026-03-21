export interface InventoryMovementDto {
  company_id: string;
  branch_id: string;
  product_id: string;
  type: string;
  quantity: number;
  reference_type: string;
  reference_id: string;
  description: string;
}
