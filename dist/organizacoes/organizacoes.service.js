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
exports.OrganizacoesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const organizacao_entity_1 = require("./organizacao.entity");
let OrganizacoesService = class OrganizacoesService {
    organizacoesRepository;
    constructor(organizacoesRepository) {
        this.organizacoesRepository = organizacoesRepository;
    }
    findAll() {
        return this.organizacoesRepository.find();
    }
    async findOne(id, includeRelations = false) {
        const organizacao = await this.organizacoesRepository.findOne({
            where: { id },
            relations: includeRelations ? ['colaboradores'] : [],
        });
        if (!organizacao) {
            throw new common_1.NotFoundException(`Organização com id ${id} não encontrada`);
        }
        return organizacao;
    }
    create(data) {
        const organizacao = this.organizacoesRepository.create(data);
        return this.organizacoesRepository.save(organizacao);
    }
    async update(id, data) {
        await this.organizacoesRepository.update(id, data);
        return this.findOne(id);
    }
    async remove(id) {
        const result = await this.organizacoesRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Organização com id ${id} não encontrada`);
        }
    }
};
exports.OrganizacoesService = OrganizacoesService;
exports.OrganizacoesService = OrganizacoesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(organizacao_entity_1.Organizacao)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrganizacoesService);
//# sourceMappingURL=organizacoes.service.js.map