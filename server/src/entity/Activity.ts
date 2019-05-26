import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Activity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    min_duration: number;

    @Column()
    age: string;

    @Column()
    group_size: string

}