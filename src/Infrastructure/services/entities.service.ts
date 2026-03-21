import { EntityType } from "../utils/entityTypes";
import {
  SqlEntitySettings,
  SqlColumnSettings,
} from "../builders/sqlEntitySettings";
import { IEntitiesService } from "../interface/entitiesService.interface";
import { injectable } from "tsyringe";

@injectable()
export class EntitiesService implements IEntitiesService {
  private entities = new Map<EntityType, SqlEntitySettings>();

  constructor() {
    this.buildEntities();
  }

  GetSettings(type: EntityType): SqlEntitySettings {
    const settings = this.entities.get(type);
    if (!settings) {
      throw new Error(`Entidad no encontrada: ${type}`);
    }
    return settings;
  }

  private buildEntities(): void {
        this.entities.set(EntityType.Plan, this.getPlanSettings());
    this.entities.set(EntityType.Suscription, this.getSuscriptionSettings());
    this.entities.set(EntityType.Company, this.getCompanieSettings());
    this.entities.set(EntityType.Unit, this.getUnitSettings());
    this.entities.set(EntityType.Branch, this.getBranchSettings());
    this.entities.set(EntityType.Role, this.getRoleSettings());
    this.entities.set(EntityType.Category, this.getCategorieSettings());
    this.entities.set(EntityType.User, this.getUserSettings());
    this.entities.set(EntityType.Product, this.getProductSettings());
    this.entities.set(EntityType.CashRegister, this.getCashRegisterSettings());
    this.entities.set(EntityType.Purchase, this.getPurchaseSettings());
    this.entities.set(EntityType.PurchaseItem, this.getPurchaseItemSettings());
    this.entities.set(EntityType.CashMovement, this.getCashMovementSettings());
    this.entities.set(EntityType.Sale, this.getSaleSettings());
    this.entities.set(EntityType.Inventory, this.getInventorieSettings());
    this.entities.set(EntityType.InventoryMovement, this.getInventoryMovementSettings());
    this.entities.set(EntityType.ProductUnit, this.getProductUnitSettings());
    this.entities.set(EntityType.SaleItem, this.getSaleItemSettings());
    this.entities.set(EntityType.Log, this.getLogSettings());
  }

    
  private getPlanSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("NAME", "name", false),
            new SqlColumnSettings("PRICE", "price", false),
            new SqlColumnSettings("DELETED", "deleted", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("PLANS", columns);
  }

  private getSuscriptionSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("COMPANY_ID", "company_id", false),
            new SqlColumnSettings("PLAN_ID", "plan_id", false),
            new SqlColumnSettings("STATUS", "status", false),
            new SqlColumnSettings("CURRENT_PERIOD_START", "current_period_start", false),
            new SqlColumnSettings("CURRENT_PERIOD_END", "current_period_end", false),
            new SqlColumnSettings("DELETED", "deleted", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("SUSCRIPTIONS", columns);
  }

  private getCompanieSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("NAME", "name", false),
            new SqlColumnSettings("BUSINESS_TYPE", "business_type", false),
            new SqlColumnSettings("TAX_ID", "tax_id", false),
            new SqlColumnSettings("EMAIL", "email", false),
            new SqlColumnSettings("PHONE", "phone", false),
            new SqlColumnSettings("DELETED", "deleted", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("COMPANIES", columns);
  }

  private getUnitSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("NAME", "name", false),
            new SqlColumnSettings("SYMBOL", "symbol", false),
            new SqlColumnSettings("DELETED", "deleted", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("UNITS", columns);
  }

  private getBranchSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("COMPANY_ID", "company_id", false),
            new SqlColumnSettings("NAME", "name", false),
            new SqlColumnSettings("ADDRESS", "address", false),
            new SqlColumnSettings("PHONE", "phone", false),
            new SqlColumnSettings("DELETED", "deleted", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("BRANCHS", columns);
  }

  private getRoleSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("COMPANY_ID", "company_id", false),
            new SqlColumnSettings("NAME", "name", false),
            new SqlColumnSettings("DESCRIPTION", "description", false),
            new SqlColumnSettings("DELETED", "deleted", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("ROLES", columns);
  }

  private getCategorieSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("COMPANY_ID", "company_id", false),
            new SqlColumnSettings("NAME", "name", false),
            new SqlColumnSettings("DELETED", "deleted", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("CATEGORIES", columns);
  }

  private getUserSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("COMPANY_ID", "company_id", false),
            new SqlColumnSettings("NAME", "name", false),
            new SqlColumnSettings("EMAIL", "email", false),
            new SqlColumnSettings("PASSWORD", "password", false),
            new SqlColumnSettings("ROLE_ID", "role_id", false),
            new SqlColumnSettings("IS_ACTIVE", "is_active", false),
            new SqlColumnSettings("DELETED", "deleted", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("USERS", columns);
  }

  private getProductSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("COMPANY_ID", "company_id", false),
            new SqlColumnSettings("NAME", "name", false),
            new SqlColumnSettings("BARCODE", "barcode", false),
            new SqlColumnSettings("CATEGORY_ID", "category_id", false),
            new SqlColumnSettings("UNIT_ID", "unit_id", false),
            new SqlColumnSettings("COST_PRICE", "cost_price", false),
            new SqlColumnSettings("SALE_PRICE", "sale_price", false),
            new SqlColumnSettings("TRACK_INVENTORY", "track_inventory", false),
            new SqlColumnSettings("DELETED", "deleted", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("PRODUCTS", columns);
  }

  private getCashRegisterSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("COMPANY_ID", "company_id", false),
            new SqlColumnSettings("BRANCH_ID", "branch_id", false),
            new SqlColumnSettings("NAME", "name", false),
            new SqlColumnSettings("IS_ACTIVE", "is_active", false),
            new SqlColumnSettings("DELETED", "deleted", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("CASHREGISTERS", columns);
  }

  private getPurchaseSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("COMPANY_ID", "company_id", false),
            new SqlColumnSettings("BRANCH_ID", "branch_id", false),
            new SqlColumnSettings("SUPPLIER", "supplier", false),
            new SqlColumnSettings("TOTAL", "total", false),
            new SqlColumnSettings("STATUS", "status", false),
            new SqlColumnSettings("DELETED", "deleted", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("PURCHASES", columns);
  }

  private getPurchaseItemSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("COMPANY_ID", "company_id", false),
            new SqlColumnSettings("PURCHASE_ID", "purchase_id", false),
            new SqlColumnSettings("PRODUCT_ID", "product_id", false),
            new SqlColumnSettings("UNIT_ID", "unit_id", false),
            new SqlColumnSettings("QUANTITY", "quantity", false),
            new SqlColumnSettings("COST_PRICE", "cost_price", false),
            new SqlColumnSettings("SUBTOTAL", "subtotal", false),
        ];
    return new SqlEntitySettings("PURCHASEITEMS", columns);
  }

  private getCashMovementSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("COMPANY_ID", "company_id", false),
            new SqlColumnSettings("CASH_REGISTER_ID", "cash_register_id", false),
            new SqlColumnSettings("TYPE", "type", false),
            new SqlColumnSettings("AMOUNT", "amount", false),
            new SqlColumnSettings("DESCRIPTION", "description", false),
            new SqlColumnSettings("REFERENCE_ID", "reference_id", false),
            new SqlColumnSettings("PAYMENT_METHOD", "payment_method", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
            new SqlColumnSettings("DELETED", "deleted", false),
        ];
    return new SqlEntitySettings("CASHMOVEMENTS", columns);
  }

  private getSaleSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("COMPANY_ID", "company_id", false),
            new SqlColumnSettings("BRANCH_ID", "branch_id", false),
            new SqlColumnSettings("USER_ID", "user_id", false),
            new SqlColumnSettings("CUSTOMER_NAME", "customer_name", false),
            new SqlColumnSettings("TOTAL", "total", false),
            new SqlColumnSettings("STATUS", "status", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
            new SqlColumnSettings("DELETED", "deleted", false),
        ];
    return new SqlEntitySettings("SALES", columns);
  }

  private getInventorieSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("COMPANY_ID", "company_id", false),
            new SqlColumnSettings("BRANCH_ID", "branch_id", false),
            new SqlColumnSettings("PRODUCT_ID", "product_id", false),
            new SqlColumnSettings("QUANTITY", "quantity", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("INVENTORIES", columns);
  }

  private getInventoryMovementSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("COMPANY_ID", "company_id", false),
            new SqlColumnSettings("BRANCH_ID", "branch_id", false),
            new SqlColumnSettings("PRODUCT_ID", "product_id", false),
            new SqlColumnSettings("TYPE", "type", false),
            new SqlColumnSettings("QUANTITY", "quantity", false),
            new SqlColumnSettings("REFERENCE_TYPE", "reference_type", false),
            new SqlColumnSettings("REFERENCE_ID", "reference_id", false),
            new SqlColumnSettings("DESCRIPTION", "description", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("INVENTORYMOVEMENTS", columns);
  }

  private getProductUnitSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("PRODUCT_ID", "product_id", false),
            new SqlColumnSettings("UNIT_ID", "unit_id", false),
            new SqlColumnSettings("FACTOR", "factor", false),
            new SqlColumnSettings("IS_BASE", "is_base", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("PRODUCTUNITS", columns);
  }

  private getSaleItemSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("COMPANY_ID", "company_id", false),
            new SqlColumnSettings("SALE_ID", "sale_id", false),
            new SqlColumnSettings("PRODUCT_ID", "product_id", false),
            new SqlColumnSettings("UNIT_ID", "unit_id", false),
            new SqlColumnSettings("QUANTITY", "quantity", false),
            new SqlColumnSettings("PRICE", "price", false),
            new SqlColumnSettings("SUBTOTAL", "subtotal", false),
            new SqlColumnSettings("CREATEDAT", "createdAt", false),
            new SqlColumnSettings("UPDATEDAT", "updatedAt", false),
            new SqlColumnSettings("CREATEDBY", "createdBy", false),
            new SqlColumnSettings("UPDATEDBY", "updatedBy", false),
        ];
    return new SqlEntitySettings("SALEITEMS", columns);
  }

  private getLogSettings(): SqlEntitySettings {
    const columns: SqlColumnSettings[] = [
        new SqlColumnSettings("ID", "id", true),
            new SqlColumnSettings("ENTITY", "entity", false),
            new SqlColumnSettings("ENTITY_ID", "entity_id", false),
            new SqlColumnSettings("ACTION", "action", false),
            new SqlColumnSettings("DESCRIPTION", "description", false),
            new SqlColumnSettings("PERFORMED_BY", "performed_by", false),
            new SqlColumnSettings("PERFORMED_AT", "performed_at", false),
        ];
    return new SqlEntitySettings("LOGS", columns);
  }

}