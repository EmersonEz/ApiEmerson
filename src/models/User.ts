import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, RelationId } from "typeorm";
import { Rol } from "./Rol";



@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => Rol)
    rol: Rol;

    @RelationId((user: User) => user.rol)
    rolId: number;

    @Column()
    email: string;

    @Column()
    pass: string;

    @Column({ default: true })
    state: boolean;
}
