import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ColaboradoresService } from './colaboradores.service';
import { Colaborador } from './colaborador.entity';

@Controller('colaboradores')
export class ColaboradoresController {
  constructor(private readonly colaboradoresService: ColaboradoresService) {}

  @Get()
  findAll(): Promise<Colaborador[]> {
    return this.colaboradoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Colaborador > {
    return this.colaboradoresService.findOne(Number(id));
  }

  @Post()
  create(@Body() data: Partial<Colaborador>): Promise<Colaborador> {
    return this.colaboradoresService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Colaborador>): Promise<Colaborador> {
    return this.colaboradoresService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.colaboradoresService.remove(Number(id));
  }
}