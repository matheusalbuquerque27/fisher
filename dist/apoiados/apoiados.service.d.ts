import { Repository } from 'typeorm';
import { Apoiado } from './apoiado.entity';
export declare class ApoiadosService {
    private readonly apoiadosRepository;
    constructor(apoiadosRepository: Repository<Apoiado>);
    findAll(): Promise<Apoiado[]>;
    findOne(id: number): Promise<Apoiado>;
    create(data: Partial<Apoiado>): Promise<Apoiado>;
    update(id: number, data: Partial<Apoiado>): Promise<Apoiado>;
    remove(id: number): Promise<void>;
}
