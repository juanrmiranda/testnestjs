import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadoCivil } from './entities/estadoCivil.entity';
import { EstadoCliente } from './entities/estadoClientes.entity';
import { Genero } from './entities/genero.entity';
import { Profesion } from './entities/profesion.entity';
import { TipoPersoneria } from './entities/tipoPersoneria.entity';
import { TipoVivienda } from './entities/tipoVivienda.entity';

@Module({imports : [TypeOrmModule.forFeature([Genero,TipoPersoneria,EstadoCivil,EstadoCliente,Profesion,TipoVivienda])]})
export class CatalogosModule {
}
