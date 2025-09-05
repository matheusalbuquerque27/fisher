import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Organizacao } from 'src/organizacoes/organizacao.entity';
import { Colaborador } from 'src/colaboradores/colaborador.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('funcoes')
export class Funcao {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ length: 100 })
  @ApiProperty({ example: 'Tesoureiro' })
  nome: string;

  @Column({ nullable: true, type: 'text' })
  @ApiProperty({ example: 'Responsável pelo controle financeiro' })
  descricao?: string;

  // 🔹 Relação N:1 com Organização
  @ManyToOne(() => Organizacao, (organizacao) => organizacao.funcoes, { onDelete: 'CASCADE' })
  organizacao: Organizacao;

  // 🔹 Relação 1:N com Colaboradores
  @OneToMany(() => Colaborador, (colaborador) => colaborador.funcao)
  colaboradores: Colaborador[];
}