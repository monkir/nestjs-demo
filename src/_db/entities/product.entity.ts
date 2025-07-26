import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
}