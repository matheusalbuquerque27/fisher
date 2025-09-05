import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { FuncoesService } from './funcoes.service';
import { Funcao } from './funcao.entity';

@Controller('funcoes')
export class FuncoesController {
  constructor(private readonly funcoesService: FuncoesService) {}

  @Get()
  findAll(): Promise<Funcao[]> {
    return this.funcoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Funcao> {
    return this.funcoesService.findOne(Number(id));
  }

  @Post()
  create(@Body() data: Partial<Funcao>): Promise<Funcao> {
    return this.funcoesService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Funcao>): Promise<Funcao> {
    return this.funcoesService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.funcoesService.remove(Number(id));
  }
}