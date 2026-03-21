import InventoryMovement from "../../Domain/entities/inventorymovement";
import { InventoryMovementDto } from './../dtos/inventorymovement.dto';

export interface IInventoryMovementService {
  findAll(page: number, pageSize: number): Promise<InventoryMovement[]>;
  findById(id: string): Promise<InventoryMovement | null>;
  create(data: InventoryMovementDto): Promise<InventoryMovement>;
  update(id: string, data: InventoryMovementDto): Promise<InventoryMovement | null>;
  delete(id: string): Promise<void>;
}
