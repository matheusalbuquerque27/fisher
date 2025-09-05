import { Repository } from 'typeorm';
import { Funcao } from './funcao.entity';
export declare class FuncoesService {
    private readonly funcoesRepository;
    constructor(funcoesRepository: Repository<Funcao>);
    findAll(): Promise<Funcao[]>;
    findOne(id: number): Promise<Funcao>;
    create(data: Partial<Funcao>): Promise<Funcao>;
    update(id: number, data: Partial<Funcao>): Promise<Funcao>;
    remove(id: number): Promise<void>;
}
