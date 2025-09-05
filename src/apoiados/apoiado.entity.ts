import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Organizacao } from 'src/organizacoes/organizacao.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('apoiados')
export class Apoiado {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ length: 120 })
  @ApiProperty({ example: 'Maria dos Santos' })
  nome: string;

  @Column({ type: 'date' })
  @ApiProperty({ example: '1987-04-15' })
  dataNascimento: Date;

  @Column({ length: 50, unique: true })
  @ApiProperty({ example: 'PASS123456' })
  documento: string;

  @Column({ default: false })
  @ApiProperty({ example: true, description: 'Indica se é casado' })
  casado: boolean;

  @Column({ default: false, nullable: true })
  @ApiProperty({ example: true, description: 'Número de filhos, se tiver' })
  numeroFilhos: number;

  @Column({ length: 100 })
  @ApiProperty({ example: 'Assembleia de Deus' })
  denominacao: string;

  @Column({ length: 150, nullable: true })
  @ApiProperty({ example: 'Maputo, Moçambique' })
  localMissao?: string;

  // 🔹 Relação com Organização
  @ManyToOne(() => Organizacao, (organizacao) => organizacao.apoiados, { onDelete: 'CASCADE' })
  organizacao: Organizacao;
}