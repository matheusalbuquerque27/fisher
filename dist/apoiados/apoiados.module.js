"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApoiadosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const apoiado_entity_1 = require("./apoiado.entity");
const apoiados_controller_1 = require("./apoiados.controller");
const apoiados_service_1 = require("./apoiados.service");
let ApoiadosModule = class ApoiadosModule {
};
exports.ApoiadosModule = ApoiadosModule;
exports.ApoiadosModule = ApoiadosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([apoiado_entity_1.Apoiado])],
        controllers: [apoiados_controller_1.ApoiadosController],
        providers: [apoiados_service_1.ApoiadosService]
    })
], ApoiadosModule);
//# sourceMappingURL=apoiados.module.js.map