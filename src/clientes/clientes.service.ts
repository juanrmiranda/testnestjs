import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Clientes } from './entities/clientes.entity';

@Injectable()
export class ClientesService {
  constructor (@InjectRepository(Clientes) private readonly clienteRepository: Repository<Clientes>){}

  async create(createClienteDto: CreateClienteDto) : Promise<Clientes> {
    const cliente = this.clienteRepository.create(createClienteDto)
    return this.clienteRepository.save(cliente)
  }

  findAll() { 
    return `This action returns all clientes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cliente`;
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}
