import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbSourceOption } from './_db/datasource';
import { ProductModule } from './product/product.module';
import { CategoriesModule } from './category/category.module';
import { HelperModule } from './_helper/helper.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dbSourceOption),
    ProductModule,
    CategoriesModule,
    HelperModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [
    AppController, 
  ],
  providers: [AppService],
})
export class AppModule {}
