import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApoiadosService } from './apoiados.service';
import { Apoiado } from './apoiado.entity';

@Controller('apoiados')
export class ApoiadosController {
  constructor(private readonly apoiadosService: ApoiadosService) {}

  @Get()
  findAll(): Promise<Apoiado[]> {
    return this.apoiadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Apoiado> {
    return this.apoiadosService.findOne(Number(id));
  }

  @Post()
  create(@Body() data: Partial<Apoiado>): Promise<Apoiado> {
    return this.apoiadosService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Apoiado>): Promise<Apoiado> {
    return this.apoiadosService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.apoiadosService.remove(Number(id));
  }
}