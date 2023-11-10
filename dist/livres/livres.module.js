"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivresModule = void 0;
const common_1 = require("@nestjs/common");
const livres_service_1 = require("./livres.service");
const livres_controller_1 = require("./livres.controller");
const typeorm_1 = require("@nestjs/typeorm");
const livre_entity_1 = require("./entities/livre.entity");
let LivresModule = class LivresModule {
};
exports.LivresModule = LivresModule;
exports.LivresModule = LivresModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([livre_entity_1.Livre])],
        providers: [livres_service_1.LivresService],
        controllers: [livres_controller_1.LivresController],
        exports: [livres_service_1.LivresService],
    })
], LivresModule);
//# sourceMappingURL=livres.module.js.map