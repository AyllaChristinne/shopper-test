import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRide1732328471309 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable("rides");
    if (!tableExists) {
      await queryRunner.createTable(
        new Table({
          name: "rides",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
              generationStrategy: "uuid",
              default: "uuid_generate_v4()",
            },
            {
              name: "customer_id",
              type: "varchar",
            },
            {
              name: "origin",
              type: "varchar",
            },
            {
              name: "destination",
              type: "varchar",
            },
            {
              name: "distance",
              type: "int",
            },
            {
              name: "duration",
              type: "varchar",
            },
            {
              name: "driver",
              type: "json",
            },
            {
              name: "value",
              type: "numeric",
              precision: 10,
              scale: 2,
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()",
            },
          ],
        })
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("rides");
  }
}
