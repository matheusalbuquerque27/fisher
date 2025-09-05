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
exports.Organizacao = void 0;
const typeorm_1 = require("typeorm");
const colaborador_entity_1 = require("../colaboradores/colaborador.entity");
const funcao_entity_1 = require("../funcoes/funcao.entity");
const apoiado_entity_1 = require("../apoiados/apoiado.entity");
const swagger_1 = require("@nestjs/swagger");
let Organizacao = class Organizacao {
    id;
    nome;
    descricao;
    logo;
    endereco;
    cidade;
    estado;
    pais;
    email;
    telefone;
    funcoes;
    colaboradores;
    apoiados;
};
exports.Organizacao = Organizacao;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Organizacao.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 150 }),
    (0, swagger_1.ApiProperty)({ example: 'Missão Esperança' }),
    __metadata("design:type", String)
], Organizacao.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    (0, swagger_1.ApiProperty)({ example: 'Organização dedicada a projetos sociais e missionários.' }),
    __metadata("design:type", String)
], Organizacao.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 150, nullable: true }),
    (0, swagger_1.ApiProperty)({ example: 'Link da logo' }),
    __metadata("design:type", String)
], Organizacao.prototype, "logo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    (0, swagger_1.ApiProperty)({ example: 'Rua das Flores, 123 - Centro' }),
    __metadata("design:type", String)
], Organizacao.prototype, "endereco", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    (0, swagger_1.ApiProperty)({ example: 'São Paulo' }),
    __metadata("design:type", String)
], Organizacao.prototype, "cidade", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    (0, swagger_1.ApiProperty)({ example: 'SP' }),
    __metadata("design:type", String)
], Organizacao.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    (0, swagger_1.ApiProperty)({ example: 'Brasil' }),
    __metadata("design:type", String)
], Organizacao.prototype, "pais", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    (0, swagger_1.ApiProperty)({ example: 'contato@missaoesperanca.org' }),
    __metadata("design:type", String)
], Organizacao.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    (0, swagger_1.ApiProperty)({ example: '+55 11 99999-9999' }),
    __metadata("design:type", String)
], Organizacao.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => funcao_entity_1.Funcao, (funcao) => funcao.organizacao),
    __metadata("design:type", Array)
], Organizacao.prototype, "funcoes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => colaborador_entity_1.Colaborador, (colaborador) => colaborador.organizacao),
    __metadata("design:type", Array)
], Organizacao.prototype, "colaboradores", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => apoiado_entity_1.Apoiado, (apoiado) => apoiado.organizacao),
    __metadata("design:type", Array)
], Organizacao.prototype, "apoiados", void 0);
exports.Organizacao = Organizacao = __decorate([
    (0, typeorm_1.Entity)('organizacoes')
], Organizacao);
//# sourceMappingURL=organizacao.entity.js.map