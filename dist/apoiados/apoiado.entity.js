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
exports.Apoiado = void 0;
const typeorm_1 = require("typeorm");
const organizacao_entity_1 = require("../organizacoes/organizacao.entity");
const swagger_1 = require("@nestjs/swagger");
let Apoiado = class Apoiado {
    id;
    nome;
    dataNascimento;
    documento;
    casado;
    numeroFilhos;
    denominacao;
    localMissao;
    organizacao;
};
exports.Apoiado = Apoiado;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Apoiado.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 120 }),
    (0, swagger_1.ApiProperty)({ example: 'Maria dos Santos' }),
    __metadata("design:type", String)
], Apoiado.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    (0, swagger_1.ApiProperty)({ example: '1987-04-15' }),
    __metadata("design:type", Date)
], Apoiado.prototype, "dataNascimento", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, unique: true }),
    (0, swagger_1.ApiProperty)({ example: 'PASS123456' }),
    __metadata("design:type", String)
], Apoiado.prototype, "documento", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    (0, swagger_1.ApiProperty)({ example: true, description: 'Indica se é casado' }),
    __metadata("design:type", Boolean)
], Apoiado.prototype, "casado", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false, nullable: true }),
    (0, swagger_1.ApiProperty)({ example: true, description: 'Número de filhos, se tiver' }),
    __metadata("design:type", Number)
], Apoiado.prototype, "numeroFilhos", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    (0, swagger_1.ApiProperty)({ example: 'Assembleia de Deus' }),
    __metadata("design:type", String)
], Apoiado.prototype, "denominacao", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 150, nullable: true }),
    (0, swagger_1.ApiProperty)({ example: 'Maputo, Moçambique' }),
    __metadata("design:type", String)
], Apoiado.prototype, "localMissao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => organizacao_entity_1.Organizacao, (organizacao) => organizacao.apoiados, { onDelete: 'CASCADE' }),
    __metadata("design:type", organizacao_entity_1.Organizacao)
], Apoiado.prototype, "organizacao", void 0);
exports.Apoiado = Apoiado = __decorate([
    (0, typeorm_1.Entity)('apoiados')
], Apoiado);
//# sourceMappingURL=apoiado.entity.js.map