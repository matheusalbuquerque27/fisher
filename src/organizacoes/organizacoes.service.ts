import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organizacao } from './organizacao.entity';

@Injectable()
export class OrganizacoesService {
  constructor(
    @InjectRepository(Organizacao)
    private readonly organizacoesRepository: Repository<Organizacao>,
  ) {}

  findAll(): Promise<Organizacao[]> {
    return this.organizacoesRepository.find();
  }

  async findOne(id: number, includeRelations = false): Promise<Organizacao> {
    const organizacao = await this.organizacoesRepository.findOne({ 
        where: { id },
        relations: includeRelations ? ['colaboradores'] : [],
     });
    if (!organizacao) {
      throw new NotFoundException(`Organização com id ${id} não encontrada`);
    }
    return organizacao;
  }

  create(data: Partial<Organizacao>): Promise<Organizacao> {
    const organizacao = this.organizacoesRepository.create(data);
    return this.organizacoesRepository.save(organizacao);
  }

  async update(id: number, data: Partial<Organizacao>): Promise<Organizacao> {
    await this.organizacoesRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.organizacoesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Organização com id ${id} não encontrada`);
    }
  }
}