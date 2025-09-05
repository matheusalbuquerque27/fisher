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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcao = void 0;
const typeorm_1 = require("typeorm");
const organizacao_entity_1 = require("../organizacoes/organizacao.entity");
const colaborador_entity_1 = require("../colaboradores/colaborador.entity");
const swagger_1 = require("@nestjs/swagger");
let Funcao = class Funcao {
    id;
    nome;
    descricao;
    organizacao;
    colaboradores;
};
exports.Funcao = Funcao;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Funcao.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    (0, swagger_1.ApiProperty)({ example: 'Tesoureiro' }),
    __metadata("design:type", String)
], Funcao.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    (0, swagger_1.ApiProperty)({ example: 'Responsável pelo controle financeiro' }),
    __metadata("design:type", String)
], Funcao.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => organizacao_entity_1.Organizacao, (organizacao) => organizacao.funcoes, { onDelete: 'CASCADE' }),
    __metadata("design:type", organizacao_entity_1.Organizacao)
], Funcao.prototype, "organizacao", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => colaborador_entity_1.Colaborador, (colaborador) => colaborador.funcao),
    __metadata("design:type", Array)
], Funcao.prototype, "colaboradores", void 0);
exports.Funcao = Funcao = __decorate([
    (0, typeorm_1.Entity)('funcoes')
], Funcao);
//# sourceMappingURL=funcao.entity.js.map