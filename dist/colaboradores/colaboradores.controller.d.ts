import { ColaboradoresService } from './colaboradores.service';
import { Colaborador } from './colaborador.entity';
export declare class ColaboradoresController {
    private readonly colaboradoresService;
    constructor(colaboradoresService: ColaboradoresService);
    findAll(): Promise<Colaborador[]>;
    findOne(id: number): Promise<Colaborador>;
    create(data: Partial<Colaborador>): Promise<Colaborador>;
    update(id: number, data: Partial<Colaborador>): Promise<Colaborador>;
    remove(id: number): Promise<void>;
}
