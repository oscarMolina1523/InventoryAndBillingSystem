/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { ISaleRepository } from "../../Domain/repositories/saleRepository.interface";
import Sale from "../../Domain/entities/sale";
import { EntityType } from "../utils/entityTypes";
import {
  SqlReadOperation,
  SqlWriteOperation,
} from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class SaleRepository implements ISaleRepository {
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
  async findAll(page: number = 1, pageSize: number = 100): Promise<Sale[]> {
    const offset = (page - 1) * pageSize;

    const readCommand = this._operationBuilder
      .Initialize(EntityType.Sale)
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
          user_id: row["USER_ID"],
          customer_name: row["CUSTOMER_NAME"],
          total: row["TOTAL"],
          status: row["STATUS"],
          createdAt: row["CREATEDAT"],
          updatedAt: row["UPDATEDAT"],
          createdBy: row["CREATEDBY"],
          updatedBy: row["UPDATEDBY"],
          deleted: row["DELETED"],
        }) as Sale,
    );
  }

  async findById(id: string): Promise<Sale | null> {
    const readCommand = this._operationBuilder
      .Initialize(EntityType.Sale)
      .WithOperation(SqlReadOperation.SelectById)
      .WithId(id)
      .BuildReader();

    const row = await this._connection.executeScalar(readCommand);
    if (!row) return null;

    return {
      id: row["ID"],
      company_id: row["COMPANY_ID"],
      branch_id: row["BRANCH_ID"],
      user_id: row["USER_ID"],
      customer_name: row["CUSTOMER_NAME"],
      total: row["TOTAL"],
      status: row["STATUS"],
      createdAt: row["CREATEDAT"],
      updatedAt: row["UPDATEDAT"],
      createdBy: row["CREATEDBY"],
      updatedBy: row["UPDATEDBY"],
      deleted: row["DELETED"],
    } as Sale;
  }

  async create(entity: Sale): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.Sale, entity)
      .WithOperation(SqlWriteOperation.Create)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async update(entity: Sale): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.Sale, entity)
      .WithOperation(SqlWriteOperation.Update)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async delete(entity: Sale): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.Sale, entity)
      .WithOperation(SqlWriteOperation.Delete)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }
  /* AUTO-GENERATED-METHODS END */
}
