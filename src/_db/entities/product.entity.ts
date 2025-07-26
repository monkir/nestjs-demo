import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Category } from "./category.entity";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Name: string;

    @Column()
    Description: string;

    @CreateDateColumn()
    CreatedTime: Date;

    @UpdateDateColumn()
    UpdatedTime: Date;

    @ManyToOne(() => Category, category => category.Products)
    Category: Category;
}