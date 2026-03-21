import { container } from "tsyringe";
import { ILogRepository } from "./../../Domain/repositories/logRepository.interface";
import { LogRepository } from "./../../Infrastructure/repositories/log.repository";
import { ILogService } from "./../../Application/interfaces/log.service.interface";
import { LogService } from "./../../Application/services/log.service";
import { LogController } from "./../controllers/log.controller";
import { ISaleItemRepository } from "./../../Domain/repositories/saleitemRepository.interface";
import { SaleItemRepository } from "./../../Infrastructure/repositories/saleitem.repository";
import { ISaleItemService } from "./../../Application/interfaces/saleitem.service.interface";
import { SaleItemService } from "./../../Application/services/saleitem.service";
import { SaleItemController } from "./../controllers/saleitem.controller";
import { IProductUnitRepository } from "./../../Domain/repositories/productunitRepository.interface";
import { ProductUnitRepository } from "./../../Infrastructure/repositories/productunit.repository";
import { IProductUnitService } from "./../../Application/interfaces/productunit.service.interface";
import { ProductUnitService } from "./../../Application/services/productunit.service";
import { ProductUnitController } from "./../controllers/productunit.controller";
import { IInventoryMovementRepository } from "./../../Domain/repositories/inventorymovementRepository.interface";
import { InventoryMovementRepository } from "./../../Infrastructure/repositories/inventorymovement.repository";
import { IInventoryMovementService } from "./../../Application/interfaces/inventorymovement.service.interface";
import { InventoryMovementService } from "./../../Application/services/inventorymovement.service";
import { InventoryMovementController } from "./../controllers/inventorymovement.controller";
import { IInventoryRepository } from "./../../Domain/repositories/inventoryRepository.interface";
import { InventoryRepository } from "./../../Infrastructure/repositories/inventory.repository";
import { IInventoryService } from "./../../Application/interfaces/inventory.service.interface";
import { InventoryService } from "./../../Application/services/inventory.service";
import { InventoryController } from "./../controllers/inventory.controller";
import { ISaleRepository } from "./../../Domain/repositories/saleRepository.interface";
import { SaleRepository } from "./../../Infrastructure/repositories/sale.repository";
import { ISaleService } from "./../../Application/interfaces/sale.service.interface";
import { SaleService } from "./../../Application/services/sale.service";
import { SaleController } from "./../controllers/sale.controller";
import { ICashMovementRepository } from "./../../Domain/repositories/cashmovementRepository.interface";
import { CashMovementRepository } from "./../../Infrastructure/repositories/cashmovement.repository";
import { ICashMovementService } from "./../../Application/interfaces/cashmovement.service.interface";
import { CashMovementService } from "./../../Application/services/cashmovement.service";
import { CashMovementController } from "./../controllers/cashmovement.controller";
import { IPurchaseItemRepository } from "./../../Domain/repositories/purchaseitemRepository.interface";
import { PurchaseItemRepository } from "./../../Infrastructure/repositories/purchaseitem.repository";
import { IPurchaseItemService } from "./../../Application/interfaces/purchaseitem.service.interface";
import { PurchaseItemService } from "./../../Application/services/purchaseitem.service";
import { PurchaseItemController } from "./../controllers/purchaseitem.controller";
import { IPurchaseRepository } from "./../../Domain/repositories/purchaseRepository.interface";
import { PurchaseRepository } from "./../../Infrastructure/repositories/purchase.repository";
import { IPurchaseService } from "./../../Application/interfaces/purchase.service.interface";
import { PurchaseService } from "./../../Application/services/purchase.service";
import { PurchaseController } from "./../controllers/purchase.controller";
import { ICashRegisterRepository } from "./../../Domain/repositories/cashregisterRepository.interface";
import { CashRegisterRepository } from "./../../Infrastructure/repositories/cashregister.repository";
import { ICashRegisterService } from "./../../Application/interfaces/cashregister.service.interface";
import { CashRegisterService } from "./../../Application/services/cashregister.service";
import { CashRegisterController } from "./../controllers/cashregister.controller";
import { IProductRepository } from "./../../Domain/repositories/productRepository.interface";
import { ProductRepository } from "./../../Infrastructure/repositories/product.repository";
import { IProductService } from "./../../Application/interfaces/product.service.interface";
import { ProductService } from "./../../Application/services/product.service";
import { ProductController } from "./../controllers/product.controller";
import { IUserRepository } from "./../../Domain/repositories/userRepository.interface";
import { UserRepository } from "./../../Infrastructure/repositories/user.repository";
import { IUserService } from "./../../Application/interfaces/user.service.interface";
import { UserService } from "./../../Application/services/user.service";
import { UserController } from "./../controllers/user.controller";
import { ICategoryRepository } from "./../../Domain/repositories/categoryRepository.interface";
import { CategoryRepository } from "./../../Infrastructure/repositories/category.repository";
import { ICategoryService } from "./../../Application/interfaces/category.service.interface";
import { CategoryService } from "./../../Application/services/category.service";
import { CategoryController } from "./../controllers/category.controller";
import { IRoleRepository } from "./../../Domain/repositories/roleRepository.interface";
import { RoleRepository } from "./../../Infrastructure/repositories/role.repository";
import { IRoleService } from "./../../Application/interfaces/role.service.interface";
import { RoleService } from "./../../Application/services/role.service";
import { RoleController } from "./../controllers/role.controller";
import { IBranchRepository } from "./../../Domain/repositories/branchRepository.interface";
import { BranchRepository } from "./../../Infrastructure/repositories/branch.repository";
import { IBranchService } from "./../../Application/interfaces/branch.service.interface";
import { BranchService } from "./../../Application/services/branch.service";
import { BranchController } from "./../controllers/branch.controller";
import { IUnitRepository } from "./../../Domain/repositories/unitRepository.interface";
import { UnitRepository } from "./../../Infrastructure/repositories/unit.repository";
import { IUnitService } from "./../../Application/interfaces/unit.service.interface";
import { UnitService } from "./../../Application/services/unit.service";
import { UnitController } from "./../controllers/unit.controller";
import { ICompanyRepository } from "./../../Domain/repositories/companyRepository.interface";
import { CompanyRepository } from "./../../Infrastructure/repositories/company.repository";
import { ICompanyService } from "./../../Application/interfaces/company.service.interface";
import { CompanyService } from "./../../Application/services/company.service";
import { CompanyController } from "./../controllers/company.controller";
import { ISuscriptionRepository } from "./../../Domain/repositories/suscriptionRepository.interface";
import { SuscriptionRepository } from "./../../Infrastructure/repositories/suscription.repository";
import { ISuscriptionService } from "./../../Application/interfaces/suscription.service.interface";
import { SuscriptionService } from "./../../Application/services/suscription.service";
import { SuscriptionController } from "./../controllers/suscription.controller";
import { IPlanRepository } from "./../../Domain/repositories/planRepository.interface";
import { PlanRepository } from "./../../Infrastructure/repositories/plan.repository";
import { IPlanService } from "./../../Application/interfaces/plan.service.interface";
import { PlanService } from "./../../Application/services/plan.service";
import { PlanController } from "./../controllers/plan.controller";
import { ISingletonSqlConnection } from '../../Infrastructure/interface/dbConnection.interface';
import { SingletonSqlConnection } from '../../Infrastructure/database/dbConnection';
import { ISqlCommandOperationBuilder } from "../../Infrastructure/interface/sqlCommandOperation.interface";
import { SqlCommandOperationBuilder } from "../../Infrastructure/builders/sqlCommandOperation.builder";
import { EntitiesService } from "../../Infrastructure/services/entities.service";
import { IEntitiesService } from "../../Infrastructure/interface/entitiesService.interface";
//builder, database connection and entity service
container.registerSingleton<ISingletonSqlConnection>('ISingletonSqlConnection', SingletonSqlConnection);
container.register<ISqlCommandOperationBuilder>('IOperationBuilder', { useClass: SqlCommandOperationBuilder });
container.registerSingleton<IEntitiesService>('IEntityService', EntitiesService);

// AUTO-GENERATED MODULE REGISTRATIONS
// Log
container.register<ILogRepository>("ILogRepository", { useClass: LogRepository });
container.register<ILogService>("ILogService", { useClass: LogService });
container.register<LogController>("LogController", { useClass: LogController });
// SaleItem
container.register<ISaleItemRepository>("ISaleItemRepository", { useClass: SaleItemRepository });
container.register<ISaleItemService>("ISaleItemService", { useClass: SaleItemService });
container.register<SaleItemController>("SaleItemController", { useClass: SaleItemController });
// ProductUnit
container.register<IProductUnitRepository>("IProductUnitRepository", { useClass: ProductUnitRepository });
container.register<IProductUnitService>("IProductUnitService", { useClass: ProductUnitService });
container.register<ProductUnitController>("ProductUnitController", { useClass: ProductUnitController });
// InventoryMovement
container.register<IInventoryMovementRepository>("IInventoryMovementRepository", { useClass: InventoryMovementRepository });
container.register<IInventoryMovementService>("IInventoryMovementService", { useClass: InventoryMovementService });
container.register<InventoryMovementController>("InventoryMovementController", { useClass: InventoryMovementController });
// Inventory
container.register<IInventoryRepository>("IInventoryRepository", { useClass: InventoryRepository });
container.register<IInventoryService>("IInventoryService", { useClass: InventoryService });
container.register<InventoryController>("InventoryController", { useClass: InventoryController });
// Sale
container.register<ISaleRepository>("ISaleRepository", { useClass: SaleRepository });
container.register<ISaleService>("ISaleService", { useClass: SaleService });
container.register<SaleController>("SaleController", { useClass: SaleController });
// CashMovement
container.register<ICashMovementRepository>("ICashMovementRepository", { useClass: CashMovementRepository });
container.register<ICashMovementService>("ICashMovementService", { useClass: CashMovementService });
container.register<CashMovementController>("CashMovementController", { useClass: CashMovementController });
// PurchaseItem
container.register<IPurchaseItemRepository>("IPurchaseItemRepository", { useClass: PurchaseItemRepository });
container.register<IPurchaseItemService>("IPurchaseItemService", { useClass: PurchaseItemService });
container.register<PurchaseItemController>("PurchaseItemController", { useClass: PurchaseItemController });
// Purchase
container.register<IPurchaseRepository>("IPurchaseRepository", { useClass: PurchaseRepository });
container.register<IPurchaseService>("IPurchaseService", { useClass: PurchaseService });
container.register<PurchaseController>("PurchaseController", { useClass: PurchaseController });
// CashRegister
container.register<ICashRegisterRepository>("ICashRegisterRepository", { useClass: CashRegisterRepository });
container.register<ICashRegisterService>("ICashRegisterService", { useClass: CashRegisterService });
container.register<CashRegisterController>("CashRegisterController", { useClass: CashRegisterController });
// Product
container.register<IProductRepository>("IProductRepository", { useClass: ProductRepository });
container.register<IProductService>("IProductService", { useClass: ProductService });
container.register<ProductController>("ProductController", { useClass: ProductController });
// User
container.register<IUserRepository>("IUserRepository", { useClass: UserRepository });
container.register<IUserService>("IUserService", { useClass: UserService });
container.register<UserController>("UserController", { useClass: UserController });
// Category
container.register<ICategoryRepository>("ICategoryRepository", { useClass: CategoryRepository });
container.register<ICategoryService>("ICategoryService", { useClass: CategoryService });
container.register<CategoryController>("CategoryController", { useClass: CategoryController });
// Role
container.register<IRoleRepository>("IRoleRepository", { useClass: RoleRepository });
container.register<IRoleService>("IRoleService", { useClass: RoleService });
container.register<RoleController>("RoleController", { useClass: RoleController });
// Branch
container.register<IBranchRepository>("IBranchRepository", { useClass: BranchRepository });
container.register<IBranchService>("IBranchService", { useClass: BranchService });
container.register<BranchController>("BranchController", { useClass: BranchController });
// Unit
container.register<IUnitRepository>("IUnitRepository", { useClass: UnitRepository });
container.register<IUnitService>("IUnitService", { useClass: UnitService });
container.register<UnitController>("UnitController", { useClass: UnitController });
// Company
container.register<ICompanyRepository>("ICompanyRepository", { useClass: CompanyRepository });
container.register<ICompanyService>("ICompanyService", { useClass: CompanyService });
container.register<CompanyController>("CompanyController", { useClass: CompanyController });
// Suscription
container.register<ISuscriptionRepository>("ISuscriptionRepository", { useClass: SuscriptionRepository });
container.register<ISuscriptionService>("ISuscriptionService", { useClass: SuscriptionService });
container.register<SuscriptionController>("SuscriptionController", { useClass: SuscriptionController });
// Plan
container.register<IPlanRepository>("IPlanRepository", { useClass: PlanRepository });
container.register<IPlanService>("IPlanService", { useClass: PlanService });
container.register<PlanController>("PlanController", { useClass: PlanController });