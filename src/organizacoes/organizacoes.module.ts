import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organizacao } from './organizacao.entity';
import { OrganizacoesService } from './organizacoes.service';
import { OrganizacoesController } from './organizacoes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Organizacao])],
  providers: [OrganizacoesService],
  controllers: [OrganizacoesController],
})
export class OrganizacoesModule {}