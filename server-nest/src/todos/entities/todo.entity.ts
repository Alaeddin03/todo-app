import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class todo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column({ default: false })
    completed: boolean;
}
