import { ApoiadosService } from './apoiados.service';
import { Apoiado } from './apoiado.entity';
export declare class ApoiadosController {
    private readonly apoiadosService;
    constructor(apoiadosService: ApoiadosService);
    findAll(): Promise<Apoiado[]>;
    findOne(id: number): Promise<Apoiado>;
    create(data: Partial<Apoiado>): Promise<Apoiado>;
    update(id: number, data: Partial<Apoiado>): Promise<Apoiado>;
    remove(id: number): Promise<void>;
}
