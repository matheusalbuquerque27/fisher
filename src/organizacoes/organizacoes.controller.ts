import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { OrganizacoesService } from './organizacoes.service';
import { Organizacao } from './organizacao.entity';

@Controller('organizacoes')
export class OrganizacoesController {
  constructor(private readonly organizacoesService: OrganizacoesService) {}

  @Get()
  findAll(): Promise<Organizacao[]> {
    return this.organizacoesService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id') id: number,
    @Query('include') include?: string
    ): Promise<Organizacao> {
    const includeRelations = include === 'colaboradores';
    return this.organizacoesService.findOne(Number(id), includeRelations);
  }

  @Post()
  create(@Body() data: Partial<Organizacao>): Promise<Organizacao> {
    return this.organizacoesService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Organizacao>): Promise<Organizacao> {
    return this.organizacoesService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.organizacoesService.remove(Number(id));
  }
}