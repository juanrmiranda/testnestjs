import { Column,  PrimaryGeneratedColumn } from "typeorm"

export abstract class tk_CatalogTable {
    @PrimaryGeneratedColumn()
    id: number
    @Column({length: 20})
    descripcion: string    
}