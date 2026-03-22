/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { ISuscriptionRepository } from "../../Domain/repositories/suscriptionRepository.interface";
import Suscription from "../../Domain/entities/suscription";
import { EntityType } from "../utils/entityTypes";
import {
  SqlReadOperation,
  SqlWriteOperation,
} from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class SuscriptionRepository implements ISuscriptionRepository {
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
  ): Promise<Suscription[]> {
    const offset = (page - 1) * pageSize;

    const readCommand = this._operationBuilder
      .Initialize(EntityType.Suscription)
      .WithOperation(SqlReadOperation.Select)
      .WithPagination(pageSize, offset)
      .BuildReader();

    const rows = await this._connection.executeQuery(readCommand);
    return rows.map(
      (row) =>
        ({
          id: row["ID"],
          company_id: row["COMPANY_ID"],
          plan_id: row["PLAN_ID"],
          status: row["STATUS"],
          current_period_start: row["CURRENT_PERIOD_START"],
          current_period_end: row["CURRENT_PERIOD_END"],
          deleted: row["DELETED"],
          createdAt: row["CREATEDAT"],
          updatedAt: row["UPDATEDAT"],
          createdBy: row["CREATEDBY"],
          updatedBy: row["UPDATEDBY"],
        }) as Suscription,
    );
  }

  async findById(id: string): Promise<Suscription | null> {
    const readCommand = this._operationBuilder
      .Initialize(EntityType.Suscription)
      .WithOperation(SqlReadOperation.SelectById)
      .WithId(id)
      .BuildReader();

    const row = await this._connection.executeScalar(readCommand);
    if (!row) return null;

    return {
      id: row["ID"],
      company_id: row["COMPANY_ID"],
      plan_id: row["PLAN_ID"],
      status: row["STATUS"],
      current_period_start: row["CURRENT_PERIOD_START"],
      current_period_end: row["CURRENT_PERIOD_END"],
      deleted: row["DELETED"],
      createdAt: row["CREATEDAT"],
      updatedAt: row["UPDATEDAT"],
      createdBy: row["CREATEDBY"],
      updatedBy: row["UPDATEDBY"],
    } as Suscription;
  }

  async findByField(field: string, value: string): Promise<Suscription[]> {
    const builder = this._operationBuilder!.Initialize(
      EntityType.Suscription,
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
          plan_id: row["PLAN_ID"],
          status: row["STATUS"],
          current_period_start: row["CURRENT_PERIOD_START"],
          current_period_end: row["CURRENT_PERIOD_END"],
          deleted: row["DELETED"],
          createdAt: row["CREATEDAT"],
          updatedAt: row["UPDATEDAT"],
          createdBy: row["CREATEDBY"],
          updatedBy: row["UPDATEDBY"],
        }) as Suscription,
    );
  }

  async create(entity: Suscription): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.Suscription, entity)
      .WithOperation(SqlWriteOperation.Create)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async update(entity: Suscription): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.Suscription, entity)
      .WithOperation(SqlWriteOperation.Update)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }

  async delete(entity: Suscription): Promise<void> {
    const writeCommand = this._operationBuilder
      .From(EntityType.Suscription, entity)
      .WithOperation(SqlWriteOperation.Delete)
      .BuildWritter();

    await this._connection.executeNonQuery(writeCommand);
  }
  /* AUTO-GENERATED-METHODS END */
}
