import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToOne, JoinColumn} from "typeorm";
import {Subcategory} from "./Subcategory";
import {Image} from "./Image";

@Entity()
export class Activity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column("simple-array")
    categories: string[];

    @ManyToMany(type => Subcategory)
    @JoinTable()
    subcategories: Subcategory[];

    @Column()
    min_duration: number;

    @Column("simple-array")
    age_groups: string[];

    @Column()
    max_group_size: string;

    @OneToOne(type => Image)
    @JoinColumn()
    image: Image;

}