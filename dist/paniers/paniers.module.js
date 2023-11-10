"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaniersModule = void 0;
const common_1 = require("@nestjs/common");
const paniers_service_1 = require("./paniers.service");
const paniers_controller_1 = require("./paniers.controller");
const typeorm_1 = require("@nestjs/typeorm");
const panier_entity_1 = require("./entities/panier.entity");
const utilisateur_module_1 = require("../utilisateur/utilisateur.module");
let PaniersModule = class PaniersModule {
};
exports.PaniersModule = PaniersModule;
exports.PaniersModule = PaniersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([panier_entity_1.Panier]), utilisateur_module_1.UtilisateurModule],
        providers: [paniers_service_1.PaniersService],
        controllers: [paniers_controller_1.PaniersController],
        exports: [paniers_service_1.PaniersService],
    })
], PaniersModule);
//# sourceMappingURL=paniers.module.js.map