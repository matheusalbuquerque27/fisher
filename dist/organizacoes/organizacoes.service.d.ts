import { Repository } from 'typeorm';
import { Organizacao } from './organizacao.entity';
export declare class OrganizacoesService {
    private readonly organizacoesRepository;
    constructor(organizacoesRepository: Repository<Organizacao>);
    findAll(): Promise<Organizacao[]>;
    findOne(id: number, includeRelations?: boolean): Promise<Organizacao>;
    create(data: Partial<Organizacao>): Promise<Organizacao>;
    update(id: number, data: Partial<Organizacao>): Promise<Organizacao>;
    remove(id: number): Promise<void>;
}
