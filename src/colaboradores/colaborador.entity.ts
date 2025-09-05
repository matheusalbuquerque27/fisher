import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Organizacao } from 'src/organizacoes/organizacao.entity';
import { Funcao } from 'src/funcoes/funcao.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('colaboradores')
export class Colaborador {
   @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ length: 100 })
  @ApiProperty({ example: 'João Silva' })
  
  nome: string;

  @Column({ type: 'date', nullable: true })
  @ApiProperty({ example: '1990-05-12' })
  dataNascimento: Date;

  @Column({ length: 50, unique: true })
  @ApiProperty({ example: 'RG123456' })
  identificacao: string;

  @Column({ type: 'text', nullable: true })
  @ApiProperty({ example: 'Rua A, 123, Bairro Centro' })
  endereco: string;

  @Column({ length: 100, nullable: true })
  @ApiProperty({ example: 'Igreja Cristã' })
  denominacaoAtual: string;

  @ManyToOne(() => Organizacao, (organizacao) => organizacao.colaboradores, { onDelete: 'CASCADE' })
  organizacao: Organizacao;

  @ManyToOne(() => Funcao, (funcao) => funcao.colaboradores, { onDelete: 'SET NULL' })
  funcao: Funcao;
}