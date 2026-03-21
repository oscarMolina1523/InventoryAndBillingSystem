/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IPurchaseItemRepository } from "../../Domain/repositories/purchaseitemRepository.interface";
import Purchaseitem from "../../Domain/entities/purchaseitem";
import { EntityType } from "../utils/entityTypes";
import {
  SqlReadOperation,
  SqlWriteOperation,
} from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class PurchaseItemRepository implements IPurchaseItemRepository {
  /* AUTO-GENERATED-PROPERTIES START */
  private readonly _operationBuilder: ISqlCommandOperationBuilder;
  private readonly _connection: ISingletonSqlConnection;
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  constructor(
    @inject("IOperationBuilder") operationBuilder: ISqlCommandOperationBuilder,
    @inject("ISingletonSqlConnection") connection: ISingletonSqlConnection,
  ) {
    this._operationBuilder = operationBuilder;
    this._connection = connection;
  }
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(
    page: number = 1,
    pageSize: number = 100,
  ): Promise<Purchaseitem[]> {
    const offset = (page - 1) * pageSize;

    const readCommand = this._operationBuilder
      .Initialize(EntityType.PurchaseItem)
      .WithOperation(SqlReadOperation.Select)
      .WithPagination(pageSize, offset)
      .BuildReader();

    const rows = await this._connection.executeQuery(readCommand);
    return rows.map(
      (row) =>
        ({
          id: row["ID"],
          company_id: row["COMPANY_ID"],
          purchase_id: row["PURCHASE_ID"],
          product_id: row["PRODUCT_ID"],
          unit_id: row["UNIT_ID"],
          quantity: row["QUANTITY"],
          cost_price: row["COST_PRICE"],
          subtotal: row["SUBTOTAL"],
          createdAt: row["CREATEDAT"],
          updatedAt: row["UPDATEDAT"],
          createdBy: row["CREATEDBY"],
          updatedBy: row["UPDATEDBY"],
        }) as Purchaseitem,
    );
  }

  async findById(id: string): Promise<Purchaseitem | null> {
    const readCommand = this._operationBuilder
      .Initialize(EntityType.PurchaseItem)
      .WithOperation(SqlReadOperation.SelectById)
      .WithId(id)
      .BuildReader();

    const row = await this._connection.executeScalar(readCommand);
    if (!row) return null;

    return {
      id: row["ID"],
      company_id: row["COMPANY_ID"],
      purchase_id: row["PURCHASE_ID"],
      product_id: row["PRODUCT_ID"],
      unit_id: row["UNIT_ID"],
      quantity: row["QUANTITY"],
      cost_price: row["COST_PRICE"],
      subtotal: row["SUBTOTAL"],
      createdAt: row["CREATEDAT"],
      updatedAt: row["UPDATEDAT"],
      createdBy: row["CREATEDBY"],
      updatedBy: row["UPDATEDBY"],
    } as Purchaseitem;
  }

  async create(entity: Purchaseitem): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.PurchaseItem, entity)
      .WithOperation(SqlWriteOperation.Create)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async update(entity: Purchaseitem): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.PurchaseItem, entity)
      .WithOperation(SqlWriteOperation.Update)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async delete(entity: Purchaseitem): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.PurchaseItem, entity)
      .WithOperation(SqlWriteOperation.Delete)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }
  /* AUTO-GENERATED-METHODS END */
}
