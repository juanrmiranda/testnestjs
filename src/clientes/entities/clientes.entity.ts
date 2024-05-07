import { EstadoCivil } from 'src/catalogos/entities/estadoCivil.entity';
import { EstadoCliente } from 'src/catalogos/entities/estadoClientes.entity';
import { Genero } from 'src/catalogos/entities/genero.entity';
import { Profesion } from 'src/catalogos/entities/profesion.entity';
import { TipoPersoneria } from 'src/catalogos/entities/tipoPersoneria.entity';
import { TipoVivienda } from 'src/catalogos/entities/tipoVivienda.entity';
import { tk_ManyToOneRestricNullable } from 'src/tkcore/tk_RelationsRestriction.decorators';
import { tk_AuditTable } from 'src/tkcore/tk_AuditTable';
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

    @tk_ManyToOneRestricNullable(() => EstadoCivil)
    estadoCivil: number

    @Column({type: "character varying",nullable:true, length: 9})
    dui: string

    @Column({type: "date",nullable:true, name:"vencimiento_dui"})
    vencimientoDui: Date
}
