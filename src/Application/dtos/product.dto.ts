export interface ProductDto {
  company_id: string;
  name: string;
  barcode: string;
  category_id: string;
  unit_id: string;
  cost_price: number;
  sale_price: number;
  track_inventory: boolean;
  deleted: boolean;
}
