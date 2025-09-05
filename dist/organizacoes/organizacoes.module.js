"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizacoesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const organizacao_entity_1 = require("./organizacao.entity");
const organizacoes_service_1 = require("./organizacoes.service");
const organizacoes_controller_1 = require("./organizacoes.controller");
let OrganizacoesModule = class OrganizacoesModule {
};
exports.OrganizacoesModule = OrganizacoesModule;
exports.OrganizacoesModule = OrganizacoesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([organizacao_entity_1.Organizacao])],
        providers: [organizacoes_service_1.OrganizacoesService],
        controllers: [organizacoes_controller_1.OrganizacoesController],
    })
], OrganizacoesModule);
//# sourceMappingURL=organizacoes.module.js.map