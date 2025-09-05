import { Repository } from 'typeorm';
import { Colaborador } from './colaborador.entity';
export declare class ColaboradoresService {
    private readonly colaboradoresRepository;
    constructor(colaboradoresRepository: Repository<Colaborador>);
    findAll(): Promise<Colaborador[]>;
    findOne(id: number): Promise<Colaborador>;
    create(data: Partial<Colaborador>): Promise<Colaborador>;
    update(id: number, data: Partial<Colaborador>): Promise<Colaborador>;
    remove(id: number): Promise<void>;
}
