import { UUID } from 'crypto';
import {Entity,Column, PrimaryGeneratedColumn, Generated, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity({name: "usuarios", schema: "auth"})
export class Usuario{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @Generated("uuid")
    uuid: UUID

    @CreateDateColumn()
    created_at: Date

    @Column()
    created_by: number

    @UpdateDateColumn({nullable:true, default: ''})
    updated_at: Date
        
    @Column({length: 20})
    codigo_usuario: string
    
    @Column()
    nombre: string
    
}
