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
exports.ColaboradoresController = void 0;
const common_1 = require("@nestjs/common");
const colaboradores_service_1 = require("./colaboradores.service");
let ColaboradoresController = class ColaboradoresController {
    colaboradoresService;
    constructor(colaboradoresService) {
        this.colaboradoresService = colaboradoresService;
    }
    findAll() {
        return this.colaboradoresService.findAll();
    }
    findOne(id) {
        return this.colaboradoresService.findOne(Number(id));
    }
    create(data) {
        return this.colaboradoresService.create(data);
    }
    update(id, data) {
        return this.colaboradoresService.update(Number(id), data);
    }
    remove(id) {
        return this.colaboradoresService.remove(Number(id));
    }
};
exports.ColaboradoresController = ColaboradoresController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ColaboradoresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ColaboradoresController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ColaboradoresController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ColaboradoresController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ColaboradoresController.prototype, "remove", null);
exports.ColaboradoresController = ColaboradoresController = __decorate([
    (0, common_1.Controller)('colaboradores'),
    __metadata("design:paramtypes", [colaboradores_service_1.ColaboradoresService])
], ColaboradoresController);
//# sourceMappingURL=colaboradores.controller.js.map