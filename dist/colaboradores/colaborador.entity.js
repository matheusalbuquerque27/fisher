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
exports.Colaborador = void 0;
const typeorm_1 = require("typeorm");
const organizacao_entity_1 = require("../organizacoes/organizacao.entity");
const funcao_entity_1 = require("../funcoes/funcao.entity");
const swagger_1 = require("@nestjs/swagger");
let Colaborador = class Colaborador {
    id;
    nome;
    dataNascimento;
    identificacao;
    endereco;
    denominacaoAtual;
    organizacao;
    funcao;
};
exports.Colaborador = Colaborador;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Colaborador.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    (0, swagger_1.ApiProperty)({ example: 'João Silva' }),
    __metadata("design:type", String)
], Colaborador.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    (0, swagger_1.ApiProperty)({ example: '1990-05-12' }),
    __metadata("design:type", Date)
], Colaborador.prototype, "dataNascimento", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, unique: true }),
    (0, swagger_1.ApiProperty)({ example: 'RG123456' }),
    __metadata("design:type", String)
], Colaborador.prototype, "identificacao", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    (0, swagger_1.ApiProperty)({ example: 'Rua A, 123, Bairro Centro' }),
    __metadata("design:type", String)
], Colaborador.prototype, "endereco", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    (0, swagger_1.ApiProperty)({ example: 'Igreja Cristã' }),
    __metadata("design:type", String)
], Colaborador.prototype, "denominacaoAtual", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => organizacao_entity_1.Organizacao, (organizacao) => organizacao.colaboradores, { onDelete: 'CASCADE' }),
    __metadata("design:type", organizacao_entity_1.Organizacao)
], Colaborador.prototype, "organizacao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => funcao_entity_1.Funcao, (funcao) => funcao.colaboradores, { onDelete: 'SET NULL' }),
    __metadata("design:type", funcao_entity_1.Funcao)
], Colaborador.prototype, "funcao", void 0);
exports.Colaborador = Colaborador = __decorate([
    (0, typeorm_1.Entity)('colaboradores')
], Colaborador);
//# sourceMappingURL=colaborador.entity.js.map