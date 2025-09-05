import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColaboradoresController } from './colaboradores.controller';
import { ColaboradoresService } from './colaboradores.service';
import { Colaborador } from './colaborador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Colaborador])],
  controllers: [ColaboradoresController],
  providers: [ColaboradoresService],
  exports: [TypeOrmModule],
})
export class ColaboradoresModule {}
