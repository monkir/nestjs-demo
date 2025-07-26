import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import dataSource from 'src/_db/datasource';

@Controller('migration')
export class MigrationController {
  @Post('run')
  async runMigrations(@Body('secret') secret: string) {
    if (secret !== process.env.MIGRATION_SECRET) {
      throw new UnauthorizedException('Invalid secret key.');
    }

    try {
      await dataSource.initialize();
      const result = await dataSource.runMigrations();
      await dataSource.destroy();
      return { success: true, migrations: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
