/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { ICashMovementRepository } from "../../Domain/repositories/cashmovementRepository.interface";
import CashMovement from "../../Domain/entities/cashmovement";
import { EntityType } from "../utils/entityTypes";
import {
  SqlReadOperation,
  SqlWriteOperation,
} from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class CashMovementRepository implements ICashMovementRepository {
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
  ): Promise<CashMovement[]> {
    const offset = (page - 1) * pageSize;

    const readCommand = this._operationBuilder
      .Initialize(EntityType.CashMovement)
      .WithOperation(SqlReadOperation.Select)
      .WithPagination(pageSize, offset)
      .BuildReader();

    const rows = await this._connection.executeQuery(readCommand);
    return rows.map(
      (row) =>
        ({
          id: row["ID"],
          company_id: row["COMPANY_ID"],
          cash_register_id: row["CASH_REGISTER_ID"],
          type: row["TYPE"],
          amount: row["AMOUNT"],
          description: row["DESCRIPTION"],
          reference_id: row["REFERENCE_ID"],
          payment_method: row["PAYMENT_METHOD"],
          createdAt: row["CREATEDAT"],
          updatedAt: row["UPDATEDAT"],
          createdBy: row["CREATEDBY"],
          updatedBy: row["UPDATEDBY"],
          deleted: row["DELETED"],
        }) as CashMovement,
    );
  }

  async findById(id: string): Promise<CashMovement | null> {
    const readCommand = this._operationBuilder
      .Initialize(EntityType.CashMovement)
      .WithOperation(SqlReadOperation.SelectById)
      .WithId(id)
      .BuildReader();

    const row = await this._connection.executeScalar(readCommand);
    if (!row) return null;

    return {
      id: row["ID"],
      company_id: row["COMPANY_ID"],
      cash_register_id: row["CASH_REGISTER_ID"],
      type: row["TYPE"],
      amount: row["AMOUNT"],
      description: row["DESCRIPTION"],
      reference_id: row["REFERENCE_ID"],
      payment_method: row["PAYMENT_METHOD"],
      createdAt: row["CREATEDAT"],
      updatedAt: row["UPDATEDAT"],
      createdBy: row["CREATEDBY"],
      updatedBy: row["UPDATEDBY"],
      deleted: row["DELETED"],
    } as CashMovement;
  }

  async create(entity: CashMovement): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.CashMovement, entity)
      .WithOperation(SqlWriteOperation.Create)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async update(entity: CashMovement): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.CashMovement, entity)
      .WithOperation(SqlWriteOperation.Update)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async delete(entity: CashMovement): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.CashMovement, entity)
      .WithOperation(SqlWriteOperation.Delete)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }
  /* AUTO-GENERATED-METHODS END */
}
