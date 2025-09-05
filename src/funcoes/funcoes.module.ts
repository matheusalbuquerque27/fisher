import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Funcao } from './funcao.entity';
import { FuncoesService } from './funcoes.service';
import { FuncoesController } from './funcoes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Funcao])], // 🔹 registra o repositório
  providers: [FuncoesService],
  controllers: [FuncoesController],
  exports: [TypeOrmModule], // opcional, se outros módulos precisarem do repositório
})
export class FuncoesModule {}