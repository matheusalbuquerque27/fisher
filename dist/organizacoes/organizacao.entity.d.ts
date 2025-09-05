import { Colaborador } from 'src/colaboradores/colaborador.entity';
import { Funcao } from 'src/funcoes/funcao.entity';
import { Apoiado } from 'src/apoiados/apoiado.entity';
export declare class Organizacao {
    id: number;
    nome: string;
    descricao?: string;
    logo?: string;
    endereco?: string;
    cidade?: string;
    estado?: string;
    pais?: string;
    email?: string;
    telefone?: string;
    funcoes: Funcao[];
    colaboradores: Colaborador[];
    apoiados: Apoiado[];
}
