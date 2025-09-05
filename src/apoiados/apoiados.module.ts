import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apoiado } from './apoiado.entity';
import { ApoiadosController } from './apoiados.controller';
import { ApoiadosService } from './apoiados.service';

@Module({
  imports: [TypeOrmModule.forFeature([Apoiado])],
  controllers: [ApoiadosController],
  providers: [ApoiadosService]
})
export class ApoiadosModule {}