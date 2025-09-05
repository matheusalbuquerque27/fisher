"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncoesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const funcao_entity_1 = require("./funcao.entity");
const funcoes_service_1 = require("./funcoes.service");
const funcoes_controller_1 = require("./funcoes.controller");
let FuncoesModule = class FuncoesModule {
};
exports.FuncoesModule = FuncoesModule;
exports.FuncoesModule = FuncoesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([funcao_entity_1.Funcao])],
        providers: [funcoes_service_1.FuncoesService],
        controllers: [funcoes_controller_1.FuncoesController],
        exports: [typeorm_1.TypeOrmModule],
    })
], FuncoesModule);
//# sourceMappingURL=funcoes.module.js.map