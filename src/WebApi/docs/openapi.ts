import { LogSchemas } from "./schemas/log.schema";
import { LogPaths } from "./paths/log.path";
import { SaleItemSchemas } from "./schemas/saleitem.schema";
import { SaleItemPaths } from "./paths/saleitem.path";
import { ProductUnitSchemas } from "./schemas/productunit.schema";
import { ProductUnitPaths } from "./paths/productunit.path";
import { InventoryMovementSchemas } from "./schemas/inventorymovement.schema";
import { InventoryMovementPaths } from "./paths/inventorymovement.path";
import { InventorySchemas } from "./schemas/inventory.schema";
import { InventoryPaths } from "./paths/inventory.path";
import { SaleSchemas } from "./schemas/sale.schema";
import { SalePaths } from "./paths/sale.path";
import { CashMovementSchemas } from "./schemas/cashmovement.schema";
import { CashMovementPaths } from "./paths/cashmovement.path";
import { PurchaseItemSchemas } from "./schemas/purchaseitem.schema";
import { PurchaseItemPaths } from "./paths/purchaseitem.path";
import { PurchaseSchemas } from "./schemas/purchase.schema";
import { PurchasePaths } from "./paths/purchase.path";
import { CashRegisterSchemas } from "./schemas/cashregister.schema";
import { CashRegisterPaths } from "./paths/cashregister.path";
import { ProductSchemas } from "./schemas/product.schema";
import { ProductPaths } from "./paths/product.path";
import { UserSchemas } from "./schemas/user.schema";
import { UserPaths } from "./paths/user.path";
import { CategorySchemas } from "./schemas/category.schema";
import { CategoryPaths } from "./paths/category.path";
import { RoleSchemas } from "./schemas/role.schema";
import { RolePaths } from "./paths/role.path";
import { BranchSchemas } from "./schemas/branch.schema";
import { BranchPaths } from "./paths/branch.path";
import { UnitSchemas } from "./schemas/unit.schema";
import { UnitPaths } from "./paths/unit.path";
import { CompanySchemas } from "./schemas/company.schema";
import { CompanyPaths } from "./paths/company.path";
import { SuscriptionSchemas } from "./schemas/suscription.schema";
import { SuscriptionPaths } from "./paths/suscription.path";
import { PlanSchemas } from "./schemas/plan.schema";
import { PlanPaths } from "./paths/plan.path";
export const OpenApiSpecification = {
  openapi: "3.0.0",
  info: {
    title: "My API",
    version: "1.0.0",
    description: "Auto-generated API documentation"
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Local server"
    }
  ],
  paths: {
    ...LogPaths,
    ...SaleItemPaths,
    ...ProductUnitPaths,
    ...InventoryMovementPaths,
    ...InventoryPaths,
    ...SalePaths,
    ...CashMovementPaths,
    ...PurchaseItemPaths,
    ...PurchasePaths,
    ...CashRegisterPaths,
    ...ProductPaths,
    ...UserPaths,
    ...CategoryPaths,
    ...RolePaths,
    ...BranchPaths,
    ...UnitPaths,
    ...CompanyPaths,
    ...SuscriptionPaths,
    ...PlanPaths,},
  components: {
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    },
    schemas: {
      ...LogSchemas,
      ...SaleItemSchemas,
      ...ProductUnitSchemas,
      ...InventoryMovementSchemas,
      ...InventorySchemas,
      ...SaleSchemas,
      ...CashMovementSchemas,
      ...PurchaseItemSchemas,
      ...PurchaseSchemas,
      ...CashRegisterSchemas,
      ...ProductSchemas,
      ...UserSchemas,
      ...CategorySchemas,
      ...RoleSchemas,
      ...BranchSchemas,
      ...UnitSchemas,
      ...CompanySchemas,
      ...SuscriptionSchemas,
      ...PlanSchemas,}
  }
};