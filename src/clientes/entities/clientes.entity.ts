import { EstadoCivil } from 'src/catalogos/entities/estadoCivil.entity';
import { EstadoCliente } from 'src/catalogos/entities/estadoClientes.entity';
import { Genero } from 'src/catalogos/entities/genero.entity';
import { Profesion } from 'src/catalogos/entities/profesion.entity';
import { TipoPersoneria } from 'src/catalogos/entities/tipoPersoneria.entity';
import { TipoVivienda } from 'src/catalogos/entities/tipoVivienda.entity';
import { tk_ManyToOneRestric, tk_ManyToOneRestricNullable } from 'src/tkcore/tk_RelationsRestriction.decorators';
import { tk_AuditTable } from 'src/tkcore/tk_AuditTable';
import {Entity,Column, ManyToOne, JoinColumn} from 'typeorm';

@Entity({name: "clientes", schema: "clientes"})
export class Clientes extends tk_AuditTable{
    @Column({ type: "character varying", length: 100})
    nombres: string

    @Column({ type: "character varying", length: 100})
    apellidos: string

    @Column({ type: "character varying", length: 200, nullable:true})
    razon_social: string

    @Column({type: "date",nullable:true,name: "fecha_nacimiento"})
    fechaNacimiento: Date
    
    @ManyToOne(type => Profesion,{onDelete: 'RESTRICT',onUpdate: 'RESTRICT'})
    @JoinColumn({ name: 'profesion' })
    @Column({name: 'profesion',nullable:true})
    profesion: number

    @tk_ManyToOneRestricNullable(() => TipoVivienda)
    tipo_vivienda: number

    @tk_ManyToOneRestricNullable(() => EstadoCliente)
    estado: number

    @ManyToOne(type => Genero,{onDelete: 'RESTRICT',onUpdate: 'RESTRICT'})
    @JoinColumn({ name: 'genero' })
    genero: number
    
    @ManyToOne(type => TipoPersoneria,{onDelete: 'RESTRICT',onUpdate: 'RESTRICT'})
    @JoinColumn({ name: 'tipo_personeria' })
    tipoPersoneria: number

    @ManyToOne(type => EstadoCivil,{onDelete: 'RESTRICT',onUpdate: 'RESTRICT'})
    @JoinColumn({ name: 'estado_civil' })
    estadoCivil: number

    @Column({type: "character varying",nullable:true, length: 9})
    dui: string

    @Column({type: "date",nullable:true, name:"vencimiento_dui"})
    vencimientoDui: Date
}
