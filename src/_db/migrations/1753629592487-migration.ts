import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1753629592487 implements MigrationInterface {
    name = 'Migration1753629592487'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("Id" SERIAL NOT NULL, "Username" character varying NOT NULL, "Password" character varying NOT NULL, "Email" character varying NOT NULL, "CreatedTime" TIMESTAMP NOT NULL DEFAULT now(), "UpdatedTime" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1e4be10b13490bd87f4cc30c142" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`ALTER TABLE "category" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "FK_32b856438dffdc269fa84434d9f" FOREIGN KEY ("userId") REFERENCES "user"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_329b8ae12068b23da547d3b4798" FOREIGN KEY ("userId") REFERENCES "user"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_329b8ae12068b23da547d3b4798"`);
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "FK_32b856438dffdc269fa84434d9f"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "userId"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
