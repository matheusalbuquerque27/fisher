import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Colaborador } from 'src/colaboradores/colaborador.entity';
import { Funcao } from 'src/funcoes/funcao.entity';
import { Apoiado } from 'src/apoiados/apoiado.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('organizacoes')
export class Organizacao {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ length: 150 })
  @ApiProperty({ example: 'Missão Esperança' })
  nome: string;

  @Column({ type: 'text', nullable: true })
  @ApiProperty({ example: 'Organização dedicada a projetos sociais e missionários.' })
  descricao?: string;

  @Column({ length: 150, nullable:true })
  @ApiProperty({ example: 'Link da logo' })
  logo?: string;

  @Column({ length: 255, nullable: true })
  @ApiProperty({ example: 'Rua das Flores, 123 - Centro' })
  endereco?: string;

  @Column({ length: 100, nullable: true })
  @ApiProperty({ example: 'São Paulo' })
  cidade?: string;

  @Column({ length: 100, nullable: true })
  @ApiProperty({ example: 'SP' })
  estado?: string;

  @Column({ length: 100, nullable: true })
  @ApiProperty({ example: 'Brasil' })
  pais?: string;

  @Column({ length: 100, nullable: true })
  @ApiProperty({ example: 'contato@missaoesperanca.org' })
  email?: string;

  @Column({ length: 20, nullable: true })
  @ApiProperty({ example: '+55 11 99999-9999' })
  telefone?: string;

  @OneToMany(() => Funcao, (funcao) => funcao.organizacao)
  funcoes: Funcao[];

  @OneToMany(() => Colaborador, (colaborador) => colaborador.organizacao)
  colaboradores: Colaborador[];

  @OneToMany(() => Apoiado, (apoiado) => apoiado.organizacao)
  apoiados: Apoiado[];
}