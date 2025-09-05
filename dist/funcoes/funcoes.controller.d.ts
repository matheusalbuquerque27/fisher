import { FuncoesService } from './funcoes.service';
import { Funcao } from './funcao.entity';
export declare class FuncoesController {
    private readonly funcoesService;
    constructor(funcoesService: FuncoesService);
    findAll(): Promise<Funcao[]>;
    findOne(id: number): Promise<Funcao>;
    create(data: Partial<Funcao>): Promise<Funcao>;
    update(id: number, data: Partial<Funcao>): Promise<Funcao>;
    remove(id: number): Promise<void>;
}
