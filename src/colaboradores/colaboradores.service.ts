import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Colaborador } from './colaborador.entity';

@Injectable()
export class ColaboradoresService {
  constructor(
    @InjectRepository(Colaborador)
    private readonly colaboradoresRepository: Repository<Colaborador>,
  ) {}

  async findAll(): Promise<Colaborador[]> {
    return this.colaboradoresRepository.find();
  }

  async findOne(id: number): Promise<Colaborador> {
    const colaborador = await this.colaboradoresRepository.findOneBy({ id });
    if (!colaborador) {
      throw new NotFoundException(`Colaborador com id ${id} não encontrado`);
    }
    return colaborador;
  }

  async create(data: Partial<Colaborador>): Promise<Colaborador> {
    const colaborador = this.colaboradoresRepository.create(data);
    return this.colaboradoresRepository.save(colaborador);
  }

  async update(id: number, data: Partial<Colaborador>): Promise<Colaborador> {
    await this.colaboradoresRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.colaboradoresRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Colaborador com id ${id} não encontrado`);
    }
  }
}