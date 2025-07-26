import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Name: string;

    @CreateDateColumn()
    CreatedTime: Date;

    @UpdateDateColumn()
    UpdatedTime: Date;

    @OneToMany(() => Product, product => product.Category)
    Products: Product[];
}