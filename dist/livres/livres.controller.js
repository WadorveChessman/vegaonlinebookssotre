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
exports.LivresController = void 0;
const common_1 = require("@nestjs/common");
const livres_service_1 = require("./livres.service");
const create_livre_dto_1 = require("./dto/create-livre.dto");
const update_livre_dto_1 = require("./dto/update-livre.dto");
const autorize_roles_decorator_1 = require("../utility/decorator/autorize-roles.decorator");
const user_roles_enum_1 = require("../utility/common/user-roles.enum");
const authentification_guards_1 = require("../utility/gouards/authentification.guards");
const authorization_gourds_1 = require("../utility/gouards/authorization.gourds");
const swagger_1 = require("@nestjs/swagger");
const serialize_interceptor_1 = require("../utility/interceptors/serialize.interceptor");
const livre_entity_1 = require("./entities/livre.entity");
let LivresController = class LivresController {
    constructor(livresService) {
        this.livresService = livresService;
    }
    create(createLivreDto) {
        return this.livresService.create(createLivreDto);
    }
    findAll() {
        return this.livresService.findAll();
    }
    findOne(id) {
        return this.livresService.findOne(+id);
    }
    update(id, updateLivreDto) {
        return this.livresService.update(+id, updateLivreDto);
    }
    remove(id) {
        return this.livresService.remove(+id);
    }
};
exports.LivresController = LivresController;
__decorate([
    (0, common_1.Post)(),
    (0, autorize_roles_decorator_1.AuthorizeRoles)(user_roles_enum_1.UserRole.Admin),
    (0, common_1.UseGuards)(authentification_guards_1.AuthentificationGuard, authorization_gourds_1.AuthorizeGuard),
    (0, swagger_1.ApiOperation)({ description: 'this is the endpoint for Creating  a book' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_livre_dto_1.CreateLivreDto]),
    __metadata("design:returntype", void 0)
], LivresController.prototype, "create", null);
__decorate([
    (0, serialize_interceptor_1.SerializeIncludes)(create_livre_dto_1.CreateLivreDto),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        description: 'cette methode affiche tout les livres',
    }),
    (0, swagger_1.ApiResponse)({ type: livre_entity_1.Livre, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LivresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, serialize_interceptor_1.SerializeIncludes)(create_livre_dto_1.CreateLivreDto),
    (0, swagger_1.ApiOperation)({
        description: 'cette methode affiche un livres',
    }),
    (0, swagger_1.ApiResponse)({ type: livre_entity_1.Livre, isArray: true }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LivresController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, autorize_roles_decorator_1.AuthorizeRoles)(user_roles_enum_1.UserRole.Admin),
    (0, common_1.UseGuards)(authentification_guards_1.AuthentificationGuard, authorization_gourds_1.AuthorizeGuard),
    (0, swagger_1.ApiOperation)({ description: 'Cette methode permet de modifier un livre' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_livre_dto_1.UpdateLivreDto]),
    __metadata("design:returntype", void 0)
], LivresController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, autorize_roles_decorator_1.AuthorizeRoles)(user_roles_enum_1.UserRole.Admin),
    (0, common_1.UseGuards)(authentification_guards_1.AuthentificationGuard, authorization_gourds_1.AuthorizeGuard),
    (0, swagger_1.ApiOperation)({ description: 'Cette methode permet de supprimer un livre' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LivresController.prototype, "remove", null);
exports.LivresController = LivresController = __decorate([
    (0, common_1.Controller)('livres'),
    __metadata("design:paramtypes", [livres_service_1.LivresService])
], LivresController);
//# sourceMappingURL=livres.controller.js.map