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
exports.FuncoesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const funcao_entity_1 = require("./funcao.entity");
let FuncoesService = class FuncoesService {
    funcoesRepository;
    constructor(funcoesRepository) {
        this.funcoesRepository = funcoesRepository;
    }
    findAll() {
        return this.funcoesRepository.find({ relations: ['organizacao'] });
    }
    async findOne(id) {
        const funcao = await this.funcoesRepository.findOne({
            where: { id },
            relations: ['organizacao', 'colaboradores'],
        });
        if (!funcao) {
            throw new common_1.NotFoundException(`Função com id ${id} não encontrada`);
        }
        return funcao;
    }
    create(data) {
        const funcao = this.funcoesRepository.create(data);
        return this.funcoesRepository.save(funcao);
    }
    async update(id, data) {
        await this.funcoesRepository.update(id, data);
        return this.findOne(id);
    }
    async remove(id) {
        const result = await this.funcoesRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Função com id ${id} não encontrada`);
        }
    }
};
exports.FuncoesService = FuncoesService;
exports.FuncoesService = FuncoesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(funcao_entity_1.Funcao)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FuncoesService);
//# sourceMappingURL=funcoes.service.js.map