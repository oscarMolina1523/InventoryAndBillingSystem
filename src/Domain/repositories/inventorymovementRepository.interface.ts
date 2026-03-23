import InventoryMovement from "../entities/inventorymovement";

export interface IInventoryMovementRepository {
  findAll(page: number, pageSize: number): Promise<InventoryMovement[]>;
  findById(id: string): Promise<InventoryMovement | null>;
  findByField(field: string, value: string): Promise<InventoryMovement[]>;
  create(data: InventoryMovement): Promise<void>;
  update(data: InventoryMovement): Promise<void>;
  delete(data: InventoryMovement): Promise<void>;
}
