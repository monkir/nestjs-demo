import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Category } from "./category.entity";
import { Product } from "./product.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Username: string;

    @Column()
    Password: string;

    @Column()
    Email: string;

    @CreateDateColumn()
    CreatedTime: Date;

    @UpdateDateColumn()
    UpdatedTime: Date;

    @OneToMany(() => Product, product => product.User)
    Products: Product[];

    @OneToMany(() => Category, category => category.User)
    Categories: Category[];
}