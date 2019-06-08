import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Subcategory {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}