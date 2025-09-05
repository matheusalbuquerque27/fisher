import { Organizacao } from 'src/organizacoes/organizacao.entity';
export declare class Apoiado {
    id: number;
    nome: string;
    dataNascimento: Date;
    documento: string;
    casado: boolean;
    numeroFilhos: number;
    denominacao: string;
    localMissao?: string;
    organizacao: Organizacao;
}
