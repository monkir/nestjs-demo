import { join } from "path";
import { DataSource, DataSourceOptions } from "typeorm";
import { Product } from "./entities/product.entity";
import { Category } from "./entities/category.entity";
import { User } from "./entities/user.entity";

export const dbSourceOption: DataSourceOptions = {
    type: 'postgres',
    url: process.env.DATABASE_URL || 'postgres://postgres:123@localhost:5432/eshop',
    // entities: [join(__dirname, '/entities', '*.entity.{ts,js}')],
    entities:[
        Category,
        Product,
        User,
    ],
    migrations: [join(__dirname, 'migrations', '*.{ts,js}')],
    migrationsTableName: "_migration",
    // synchronize: true,
}

const dbSource:DataSource=new DataSource(dbSourceOption);
export default  dbSource;