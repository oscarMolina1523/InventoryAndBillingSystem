/* AUTO-GENERATED-IMPORTS START */
        import { injectable, inject } from "tsyringe";
        import { ILogRepository } from "../../Domain/repositories/logRepository.interface";
        import Log from "../../Domain/entities/log";
        import { EntityType } from "../utils/entityTypes";
import { SqlReadOperation, SqlWriteOperation } from "../builders/sqlOperations.enum";
import { ISqlCommandOperationBuilder } from "../interface/sqlCommandOperation.interface";
import { ISingletonSqlConnection } from "../interface/dbConnection.interface";
        /* AUTO-GENERATED-IMPORTS END */

@injectable()
export class LogRepository implements ILogRepository {

  /* AUTO-GENERATED-PROPERTIES START */
        private readonly _operationBuilder: ISqlCommandOperationBuilder;
private readonly _connection: ISingletonSqlConnection;
        /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
        constructor(
  @inject("IOperationBuilder") operationBuilder: ISqlCommandOperationBuilder,
  @inject("ISingletonSqlConnection") connection: ISingletonSqlConnection
) {
  this._operationBuilder = operationBuilder;
  this._connection = connection;
}
        /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
        async findAll(page: number = 1, pageSize: number = 100): Promise<Log[]> {
  const offset = (page - 1) * pageSize;

  const readCommand = this._operationBuilder
    .Initialize(EntityType.Log)
    .WithOperation(SqlReadOperation.Select)
    .WithPagination(pageSize, offset)
    .BuildReader();

  const rows = await this._connection.executeQuery(readCommand);
  return rows.map(
  (row) =>
    ({
      id: row["ID"],
      entity: row["ENTITY"],
entity_id: row["ENTITY_ID"],
action: row["ACTION"],
description: row["DESCRIPTION"],
performed_by: row["PERFORMED_BY"],
performed_at: row["PERFORMED_AT"],
    } as Log)
);
}

async findById(id: string): Promise<Log | null> {
  const readCommand = this._operationBuilder
    .Initialize(EntityType.Log)
    .WithOperation(SqlReadOperation.SelectById)
    .WithId(id)
    .BuildReader();

  const row = await this._connection.executeScalar(readCommand);
  if (!row) return null;

  return {
  id: row["ID"],
      entity: row["ENTITY"],
entity_id: row["ENTITY_ID"],
action: row["ACTION"],
description: row["DESCRIPTION"],
performed_by: row["PERFORMED_BY"],
performed_at: row["PERFORMED_AT"],
  } as Log;
}

async create(entity: Log): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Log, entity)
    .WithOperation(SqlWriteOperation.Create)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async update(entity: Log): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Log, entity)
    .WithOperation(SqlWriteOperation.Update)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}

async delete(entity: Log): Promise<void> {
  const writeCommand = this._operationBuilder
    .From(EntityType.Log, entity)
    .WithOperation(SqlWriteOperation.Delete)
    .BuildWritter();

  await this._connection.executeNonQuery(writeCommand);
}
        /* AUTO-GENERATED-METHODS END */
}
