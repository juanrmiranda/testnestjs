import { EstadoCivil } from 'src/catalogos/entities/estadoCivil.entity';
import { EstadoCliente } from 'src/catalogos/entities/estadoClientes.entity';
import { Genero } from 'src/catalogos/entities/genero.entity';
import { Profesion } from 'src/catalogos/entities/profesion.entity';
import { TipoPersoneria } from 'src/catalogos/entities/tipoPersoneria.entity';
import { TipoVivienda } from 'src/catalogos/entities/tipoVivienda.entity';
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
    profesion: Profesion

    @ManyToOne(type => TipoVivienda,{onDelete: 'RESTRICT',onUpdate: 'RESTRICT'})
    @JoinColumn({ name: 'tipo_vivienda' })
    tipoivienda: TipoVivienda

    @ManyToOne(type => EstadoCliente,{onDelete: 'RESTRICT',onUpdate: 'RESTRICT'})
    @JoinColumn({ name: 'estado' })
    estado: EstadoCliente

    @ManyToOne(type => Genero,{onDelete: 'RESTRICT',onUpdate: 'RESTRICT'})
    @JoinColumn({ name: 'genero' })
    genero: Genero
    
    @ManyToOne(type => TipoPersoneria,{onDelete: 'RESTRICT',onUpdate: 'RESTRICT'})
    @JoinColumn({ name: 'tipo_personeria' })
    tipoPersoneria: TipoPersoneria

    @ManyToOne(type => EstadoCivil,{onDelete: 'RESTRICT',onUpdate: 'RESTRICT'})
    @JoinColumn({ name: 'estado_civil' })
    estadoCivil: EstadoCivil

    @Column({type: "character varying",nullable:true, length: 9})
    dui: string

    @Column({type: "date",nullable:true, name:"vencimiento_dui"})
    vencimientoDui: Date
}
