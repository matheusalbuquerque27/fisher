import { Organizacao } from 'src/organizacoes/organizacao.entity';
import { Colaborador } from 'src/colaboradores/colaborador.entity';
export declare class Funcao {
    id: number;
    nome: string;
    descricao?: string;
    organizacao: Organizacao;
    colaboradores: Colaborador[];
}
