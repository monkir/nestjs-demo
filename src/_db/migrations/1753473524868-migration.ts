import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1753473524868 implements MigrationInterface {
    name = 'Migration1753473524868'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("Id" SERIAL NOT NULL, "Name" character varying NOT NULL, "Description" character varying NOT NULL, "CreatedTime" TIMESTAMP NOT NULL DEFAULT now(), "UpdatedTime" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a22f8718d47066cb0a07aa5db66" PRIMARY KEY ("Id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
