import { OrganizacoesService } from './organizacoes.service';
import { Organizacao } from './organizacao.entity';
export declare class OrganizacoesController {
    private readonly organizacoesService;
    constructor(organizacoesService: OrganizacoesService);
    findAll(): Promise<Organizacao[]>;
    findOne(id: number, include?: string): Promise<Organizacao>;
    create(data: Partial<Organizacao>): Promise<Organizacao>;
    update(id: number, data: Partial<Organizacao>): Promise<Organizacao>;
    remove(id: number): Promise<void>;
}
