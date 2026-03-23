/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IPurchaseItemRepository } from "../../Domain/repositories/purchaseitemRepository.interface";
import PurchaseItem from "../../Domain/entities/purchaseitem";
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
  ): Promise<PurchaseItem[]> {
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
        }) as PurchaseItem,
    );
  }

  async findById(id: string): Promise<PurchaseItem | null> {
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
    } as PurchaseItem;
  }

  async findByField(field: string, value: string): Promise<PurchaseItem[]> {
    const builder = this._operationBuilder!.Initialize(
      EntityType.PurchaseItem,
    ).WithOperation(SqlReadOperation.SelectByField);

    if (!builder.WithField) throw new Error("WithField no implementado");

    const readCommand = builder.WithField(field, value).BuildReader();

    const rows = await this._connection.executeQuery(readCommand);
    if (!rows || rows.length === 0) return [];

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
        }) as PurchaseItem,
    );
  }

  async create(entity: PurchaseItem): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.PurchaseItem, entity)
      .WithOperation(SqlWriteOperation.Create)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async update(entity: PurchaseItem): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.PurchaseItem, entity)
      .WithOperation(SqlWriteOperation.Update)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async delete(entity: PurchaseItem): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.PurchaseItem, entity)
      .WithOperation(SqlWriteOperation.Delete)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }
  /* AUTO-GENERATED-METHODS END */
}
