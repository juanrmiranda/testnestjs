import { Module } from '@nestjs/common';
import { ClientesModule } from './clientes/clientes.module';
import { UsuariosModule } from './auth/usuarios/usuarios.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { CatalogosModule } from './catalogos/catalogos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : 'postgres',
      host : 'localhost',
      port : 5432,
      username : 'postgres',
      password : 'postgres',
      database : 'core',
      autoLoadEntities: true, 
      synchronize: true
    }),
    ClientesModule, UsuariosModule, CatalogosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
