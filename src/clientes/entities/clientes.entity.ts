import { EstadoCliente, TipoPersoneria, TipoVivienda, Genero, Profesion, estadoCivil } from 'catalogos/entities'; 
import { tk_ManyToOneRestricNullable, tk_AuditTable } from 'tkcore';
import { Entity,Column } from 'typeorm';

@Entity({name: "clientes", schema: "clientes"})
export class Clientes extends tk_AuditTable{
    @Column({ type: "character varying", length: 100})
    nombres: string

    @Column({ type: "character varying", length: 100})
    apellidos: string

    @Column({ type: "character varying", length: 200, nullable:true})
    razonSocial: string

    @Column({type: "date",nullable:true,name: "fecha_nacimiento"})
    fechaNacimiento: Date
    
    @tk_ManyToOneRestricNullable(() => Profesion)
    profesion: number

    @tk_ManyToOneRestricNullable(() => TipoVivienda)
    tipoVivienda: number

    @tk_ManyToOneRestricNullable(() => EstadoCliente)
    estado: number

    @tk_ManyToOneRestricNullable(() => Genero)
    genero: number
    
    @tk_ManyToOneRestricNullable(()=> TipoPersoneria)
    tipoPersoneria: number

    @tk_ManyToOneRestricNullable(() => estadoCivil)
    estadoCivil: number

    @Column({type: "character varying",nullable:true, length: 9})
    dui: string

    @Column({type: "date",nullable:true, name:"vencimiento_dui"})
    vencimientoDui: Date
}
