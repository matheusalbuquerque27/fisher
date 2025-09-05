import { Organizacao } from 'src/organizacoes/organizacao.entity';
import { Funcao } from 'src/funcoes/funcao.entity';
export declare class Colaborador {
    id: number;
    nome: string;
    dataNascimento: Date;
    identificacao: string;
    endereco: string;
    denominacaoAtual: string;
    organizacao: Organizacao;
    funcao: Funcao;
}
