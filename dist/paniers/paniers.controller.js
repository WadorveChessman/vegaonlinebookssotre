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
exports.PaniersController = void 0;
const common_1 = require("@nestjs/common");
const paniers_service_1 = require("./paniers.service");
const create_panier_dto_1 = require("./dto/create-panier.dto");
const update_panier_dto_1 = require("./dto/update-panier.dto");
const authorization_gourds_1 = require("../utility/gouards/authorization.gourds");
const authentification_guards_1 = require("../utility/gouards/authentification.guards");
const swagger_1 = require("@nestjs/swagger");
let PaniersController = class PaniersController {
    constructor(paniersService) {
        this.paniersService = paniersService;
    }
    create(createPanierDto) {
        return this.paniersService.create(createPanierDto);
    }
    findAll() {
        return this.paniersService.findAll();
    }
    findOne(id) {
        return this.paniersService.findOne(+id);
    }
    update(id, updatePanierDto) {
        return this.paniersService.update(+id, updatePanierDto);
    }
    remove(id) {
        this.paniersService.remove(+id);
    }
};
exports.PaniersController = PaniersController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(authentification_guards_1.AuthentificationGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Créer un panier' }),
    (0, swagger_1.ApiBody)({ type: create_panier_dto_1.CreatePanierDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Le panier a été créé avec succès.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Requête invalide.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_panier_dto_1.CreatePanierDto]),
    __metadata("design:returntype", void 0)
], PaniersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer la liste de tous les paniers' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste de tous les paniers récupérée avec succès.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaniersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(authorization_gourds_1.AuthorizeGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer un panier par ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID du panier' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Panier récupéré avec succès.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Panier non trouvé.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaniersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(authentification_guards_1.AuthentificationGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour un panier par ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID du panier' }),
    (0, swagger_1.ApiBody)({ type: update_panier_dto_1.UpdatePanierDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Panier mis à jour avec succès.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Panier non trouvé.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_panier_dto_1.UpdatePanierDto]),
    __metadata("design:returntype", void 0)
], PaniersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(authentification_guards_1.AuthentificationGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer un panier par ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID du panier' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Panier supprimé avec succès.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Panier non trouvé.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaniersController.prototype, "remove", null);
exports.PaniersController = PaniersController = __decorate([
    (0, common_1.Controller)('paniers'),
    (0, swagger_1.ApiTags)('Paniers'),
    __metadata("design:paramtypes", [paniers_service_1.PaniersService])
], PaniersController);
//# sourceMappingURL=paniers.controller.js.map