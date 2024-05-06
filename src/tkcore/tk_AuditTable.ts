import { UUID } from "crypto"
import { Usuario } from "src/auth/usuarios/entities/usuario.entity"
import { Column, CreateDateColumn, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn,  UpdateDateColumn } from "typeorm"

export abstract class tk_AuditTable {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @Generated("uuid")
    uuid: UUID

    @CreateDateColumn()
    created_at: Date

    @ManyToOne(type => Usuario,{
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT'
    })
    @JoinColumn({ name: 'created_by' })
    @Column({nullable:false})
    created_by: number

    @UpdateDateColumn({nullable:true, default: ''})
    updated_at: Date

    @ManyToOne(type => Usuario,{
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT'
    })
    @JoinColumn({ name: 'updated_by' })
    updated_by: Usuario

}