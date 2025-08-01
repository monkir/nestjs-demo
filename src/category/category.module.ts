import { Module } from '@nestjs/common';
import { CategoriesService } from './category.service';
import { CategoriesController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/_db/entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category]),
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
