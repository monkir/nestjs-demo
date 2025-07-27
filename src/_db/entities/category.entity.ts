import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./product.entity";
import { User } from "./user.entity";

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

    @ManyToOne(() => User, user => user.Categories)
    User: User;
}