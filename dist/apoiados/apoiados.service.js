"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApoiadosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const apoiado_entity_1 = require("./apoiado.entity");
let ApoiadosService = class ApoiadosService {
    apoiadosRepository;
    constructor(apoiadosRepository) {
        this.apoiadosRepository = apoiadosRepository;
    }
    findAll() {
        return this.apoiadosRepository.find({ relations: ['organizacao'] });
    }
    async findOne(id) {
        const apoiado = await this.apoiadosRepository.findOne({
            where: { id },
            relations: ['organizacao'],
        });
        if (!apoiado) {
            throw new common_1.NotFoundException(`Apoiado com id ${id} não encontrado`);
        }
        return apoiado;
    }
    create(data) {
        const apoiado = this.apoiadosRepository.create(data);
        return this.apoiadosRepository.save(apoiado);
    }
    async update(id, data) {
        await this.apoiadosRepository.update(id, data);
        return this.findOne(id);
    }
    async remove(id) {
        const result = await this.apoiadosRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Apoiado com id ${id} não encontrado`);
        }
    }
};
exports.ApoiadosService = ApoiadosService;
exports.ApoiadosService = ApoiadosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(apoiado_entity_1.Apoiado)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ApoiadosService);
//# sourceMappingURL=apoiados.service.js.map