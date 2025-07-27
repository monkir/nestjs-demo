import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Category } from "./category.entity";
import { User } from "./user.entity";

@Entity()
export class Product {
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

    @ManyToOne(() => User, user => user.Products)
    User: User;
}