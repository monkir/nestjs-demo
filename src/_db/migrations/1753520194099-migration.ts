import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1753520194099 implements MigrationInterface {
    name = 'Migration1753520194099'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("Id" SERIAL NOT NULL, "Name" character varying NOT NULL, "CreatedTime" TIMESTAMP NOT NULL DEFAULT now(), "UpdatedTime" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2586ca3a9036d46879e9e354de9" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`ALTER TABLE "product" ADD "categoryId" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_ff0c0301a95e517153df97f6812" FOREIGN KEY ("categoryId") REFERENCES "category"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_ff0c0301a95e517153df97f6812"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "categoryId"`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
