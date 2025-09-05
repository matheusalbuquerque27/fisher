import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Apoiado } from './apoiado.entity';

@Injectable()
export class ApoiadosService {
  constructor(
    @InjectRepository(Apoiado)
    private readonly apoiadosRepository: Repository<Apoiado>,
  ) {}

  findAll(): Promise<Apoiado[]> {
    return this.apoiadosRepository.find({ relations: ['organizacao'] });
  }

  async findOne(id: number): Promise<Apoiado> {
    const apoiado = await this.apoiadosRepository.findOne({
      where: { id },
      relations: ['organizacao'],
    });
    if (!apoiado) {
      throw new NotFoundException(`Apoiado com id ${id} não encontrado`);
    }
    return apoiado;
  }

  create(data: Partial<Apoiado>): Promise<Apoiado> {
    const apoiado = this.apoiadosRepository.create(data);
    return this.apoiadosRepository.save(apoiado);
  }

  async update(id: number, data: Partial<Apoiado>): Promise<Apoiado> {
    await this.apoiadosRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.apoiadosRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Apoiado com id ${id} não encontrado`);
    }
  }
}