import PurchaseItem from "../../Domain/entities/purchaseitem";
import { PurchaseItemDto } from './../dtos/purchaseitem.dto';

export interface IPurchaseItemService {
  findAll(page: number, pageSize: number): Promise<PurchaseItem[]>;
  findById(id: string): Promise<PurchaseItem | null>;
  create(data: PurchaseItemDto): Promise<PurchaseItem>;
  update(id: string, data: PurchaseItemDto): Promise<PurchaseItem | null>;
  delete(id: string): Promise<void>;
}
