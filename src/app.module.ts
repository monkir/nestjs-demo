import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbSourceOption } from './_db/datasource';
import { ProductModule } from './product/product.module';
import { CategoriesModule } from './category/category.module';
import { MigrationController } from './migration.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dbSourceOption),
    ProductModule,
    CategoriesModule,
  ],
  controllers: [
    AppController, 
    MigrationController,
  ],
  providers: [AppService],
})
export class AppModule {}
