/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { ISaleItemRepository } from "../../Domain/repositories/saleitemRepository.interface";
import Saleitem from "../../Domain/entities/saleitem";
import { EntityType } from "../utils/entityTypes";
import {
  SqlReadOperation,
  SqlWriteOperation,
} from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class SaleItemRepository implements ISaleItemRepository {
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
  async findAll(page: number = 1, pageSize: number = 100): Promise<Saleitem[]> {
    const offset = (page - 1) * pageSize;

    const readCommand = this._operationBuilder
      .Initialize(EntityType.SaleItem)
      .WithOperation(SqlReadOperation.Select)
      .WithPagination(pageSize, offset)
      .BuildReader();

    const rows = await this._connection.executeQuery(readCommand);
    return rows.map(
      (row) =>
        ({
          id: row["ID"],
          company_id: row["COMPANY_ID"],
          sale_id: row["SALE_ID"],
          product_id: row["PRODUCT_ID"],
          unit_id: row["UNIT_ID"],
          quantity: row["QUANTITY"],
          price: row["PRICE"],
          subtotal: row["SUBTOTAL"],
          createdAt: row["CREATEDAT"],
          updatedAt: row["UPDATEDAT"],
          createdBy: row["CREATEDBY"],
          updatedBy: row["UPDATEDBY"],
        }) as Saleitem,
    );
  }

  async findById(id: string): Promise<Saleitem | null> {
    const readCommand = this._operationBuilder
      .Initialize(EntityType.SaleItem)
      .WithOperation(SqlReadOperation.SelectById)
      .WithId(id)
      .BuildReader();

    const row = await this._connection.executeScalar(readCommand);
    if (!row) return null;

    return {
      id: row["ID"],
      company_id: row["COMPANY_ID"],
      sale_id: row["SALE_ID"],
      product_id: row["PRODUCT_ID"],
      unit_id: row["UNIT_ID"],
      quantity: row["QUANTITY"],
      price: row["PRICE"],
      subtotal: row["SUBTOTAL"],
      createdAt: row["CREATEDAT"],
      updatedAt: row["UPDATEDAT"],
      createdBy: row["CREATEDBY"],
      updatedBy: row["UPDATEDBY"],
    } as Saleitem;
  }

  async create(entity: Saleitem): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.SaleItem, entity)
      .WithOperation(SqlWriteOperation.Create)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async update(entity: Saleitem): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.SaleItem, entity)
      .WithOperation(SqlWriteOperation.Update)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async delete(entity: Saleitem): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.SaleItem, entity)
      .WithOperation(SqlWriteOperation.Delete)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }
  /* AUTO-GENERATED-METHODS END */
}
