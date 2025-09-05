import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Funcao } from './funcao.entity';

@Injectable()
export class FuncoesService {
  constructor(
    @InjectRepository(Funcao)
    private readonly funcoesRepository: Repository<Funcao>,
  ) {}

  findAll(): Promise<Funcao[]> {
    return this.funcoesRepository.find({ relations: ['organizacao'] });
  }

  async findOne(id: number): Promise<Funcao> {
    const funcao = await this.funcoesRepository.findOne({
      where: { id },
      relations: ['organizacao', 'colaboradores'],
    });
    if (!funcao) {
      throw new NotFoundException(`Função com id ${id} não encontrada`);
    }
    return funcao;
  }

  create(data: Partial<Funcao>): Promise<Funcao> {
    const funcao = this.funcoesRepository.create(data);
    return this.funcoesRepository.save(funcao);
  }

  async update(id: number, data: Partial<Funcao>): Promise<Funcao> {
    await this.funcoesRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.funcoesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Função com id ${id} não encontrada`);
    }
  }
}