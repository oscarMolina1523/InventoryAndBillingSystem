/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IInventoryMovementRepository } from "../../Domain/repositories/inventorymovementRepository.interface";
import InventoryMovement from "../../Domain/entities/inventorymovement";
import { EntityType } from "../utils/entityTypes";
import {
  SqlReadOperation,
  SqlWriteOperation,
} from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class InventoryMovementRepository implements IInventoryMovementRepository {
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
  ): Promise<InventoryMovement[]> {
    const offset = (page - 1) * pageSize;

    const readCommand = this._operationBuilder
      .Initialize(EntityType.InventoryMovement)
      .WithOperation(SqlReadOperation.Select)
      .WithPagination(pageSize, offset)
      .BuildReader();

    const rows = await this._connection.executeQuery(readCommand);
    return rows.map(
      (row) =>
        ({
          id: row["ID"],
          company_id: row["COMPANY_ID"],
          branch_id: row["BRANCH_ID"],
          product_id: row["PRODUCT_ID"],
          type: row["TYPE"],
          quantity: row["QUANTITY"],
          reference_type: row["REFERENCE_TYPE"],
          reference_id: row["REFERENCE_ID"],
          description: row["DESCRIPTION"],
          createdAt: row["CREATEDAT"],
          updatedAt: row["UPDATEDAT"],
          createdBy: row["CREATEDBY"],
          updatedBy: row["UPDATEDBY"],
        }) as InventoryMovement,
    );
  }

  async findById(id: string): Promise<InventoryMovement | null> {
    const readCommand = this._operationBuilder
      .Initialize(EntityType.InventoryMovement)
      .WithOperation(SqlReadOperation.SelectById)
      .WithId(id)
      .BuildReader();

    const row = await this._connection.executeScalar(readCommand);
    if (!row) return null;

    return {
      id: row["ID"],
      company_id: row["COMPANY_ID"],
      branch_id: row["BRANCH_ID"],
      product_id: row["PRODUCT_ID"],
      type: row["TYPE"],
      quantity: row["QUANTITY"],
      reference_type: row["REFERENCE_TYPE"],
      reference_id: row["REFERENCE_ID"],
      description: row["DESCRIPTION"],
      createdAt: row["CREATEDAT"],
      updatedAt: row["UPDATEDAT"],
      createdBy: row["CREATEDBY"],
      updatedBy: row["UPDATEDBY"],
    } as InventoryMovement;
  }

  async findByField(
    field: string,
    value: string,
  ): Promise<InventoryMovement[]> {
    const builder = this._operationBuilder!.Initialize(
      EntityType.InventoryMovement,
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
          branch_id: row["BRANCH_ID"],
          product_id: row["PRODUCT_ID"],
          type: row["TYPE"],
          quantity: row["QUANTITY"],
          reference_type: row["REFERENCE_TYPE"],
          reference_id: row["REFERENCE_ID"],
          description: row["DESCRIPTION"],
          createdAt: row["CREATEDAT"],
          updatedAt: row["UPDATEDAT"],
          createdBy: row["CREATEDBY"],
          updatedBy: row["UPDATEDBY"],
        }) as InventoryMovement,
    );
  }

  async create(entity: InventoryMovement): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.InventoryMovement, entity)
      .WithOperation(SqlWriteOperation.Create)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async update(entity: InventoryMovement): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.InventoryMovement, entity)
      .WithOperation(SqlWriteOperation.Update)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async delete(entity: InventoryMovement): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.InventoryMovement, entity)
      .WithOperation(SqlWriteOperation.Delete)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }
  /* AUTO-GENERATED-METHODS END */
}
