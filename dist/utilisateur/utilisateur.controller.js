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
exports.UtilisateurController = void 0;
const common_1 = require("@nestjs/common");
const utilisateur_service_1 = require("./utilisateur.service");
const create_utilisateur_dto_1 = require("./dto/create-utilisateur.dto");
const update_utilisateur_dto_1 = require("./dto/update-utilisateur.dto");
const swagger_1 = require("@nestjs/swagger");
const user_signin_dto_1 = require("./dto/user-signin.dto");
const utilisateur_entity_1 = require("./entities/utilisateur.entity");
const autorize_roles_decorator_1 = require("../utility/decorator/autorize-roles.decorator");
const user_roles_enum_1 = require("../utility/common/user-roles.enum");
const authentification_guards_1 = require("../utility/gouards/authentification.guards");
const authorization_gourds_1 = require("../utility/gouards/authorization.gourds");
const current_users_decorator_1 = require("../utility/decorator/current-users.decorator");
let UtilisateurController = class UtilisateurController {
    constructor(utilisateurService) {
        this.utilisateurService = utilisateurService;
    }
    create(createUtilisateurDto) {
        return this.utilisateurService.create(createUtilisateurDto);
    }
    remove(id) {
        return this.utilisateurService.remove(+id);
    }
    async signIn(signInUserDto) {
        const user = await this.utilisateurService.signin(signInUserDto);
        const token_access = await this.utilisateurService.token_access(user);
        return { token_access, user };
    }
    async findAll() {
        return this.utilisateurService.findAll();
    }
    async findOne(id) {
        return await this.utilisateurService.findOne(+id);
    }
    async viewProfile(currentUser) {
        if (!currentUser) {
            throw new common_1.NotFoundException('User not found');
        }
        return await this.utilisateurService.findOne(currentUser.id);
    }
    async update(currentUser, updateUtilisateurDto) {
        if (!currentUser) {
            throw new common_1.NotFoundException('User not found');
        }
        return await this.utilisateurService.update(currentUser.id, updateUtilisateurDto);
    }
};
exports.UtilisateurController = UtilisateurController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_utilisateur_dto_1.CreateUtilisateurDto]),
    __metadata("design:returntype", void 0)
], UtilisateurController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UtilisateurController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('signin'),
    (0, swagger_1.ApiOperation)({ description: 'this is the endpoint for connect  a user' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_signin_dto_1.SignInUserDto]),
    __metadata("design:returntype", Promise)
], UtilisateurController.prototype, "signIn", null);
__decorate([
    (0, autorize_roles_decorator_1.AuthorizeRoles)(user_roles_enum_1.UserRole.Admin),
    (0, common_1.UseGuards)(authentification_guards_1.AuthentificationGuard, authorization_gourds_1.AuthorizeGuard),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for retrieving all  users without filter',
    }),
    (0, swagger_1.ApiResponse)({ type: create_utilisateur_dto_1.CreateUtilisateurDto, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UtilisateurController.prototype, "findAll", null);
__decorate([
    (0, autorize_roles_decorator_1.AuthorizeRoles)(user_roles_enum_1.UserRole.Admin),
    (0, common_1.UseGuards)(authentification_guards_1.AuthentificationGuard, authorization_gourds_1.AuthorizeGuard),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for retrieving  one user',
    }),
    (0, swagger_1.ApiResponse)({ type: create_utilisateur_dto_1.CreateUtilisateurDto, isArray: false }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'id of user' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UtilisateurController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(authentification_guards_1.AuthentificationGuard),
    (0, common_1.Get)('me/profile'),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for retrieving  active user profile',
    }),
    (0, swagger_1.ApiResponse)({ type: create_utilisateur_dto_1.CreateUtilisateurDto, isArray: false }),
    __param(0, (0, current_users_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [utilisateur_entity_1.Utilisateur]),
    __metadata("design:returntype", Promise)
], UtilisateurController.prototype, "viewProfile", null);
__decorate([
    (0, common_1.UseGuards)(authentification_guards_1.AuthentificationGuard),
    (0, common_1.Patch)(),
    (0, swagger_1.ApiOperation)({
        description: 'this is the endpoint for updating  active user profile',
    }),
    (0, swagger_1.ApiResponse)({ type: create_utilisateur_dto_1.CreateUtilisateurDto, isArray: false }),
    __param(0, (0, current_users_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [utilisateur_entity_1.Utilisateur,
        update_utilisateur_dto_1.UpdateUtilisateurDto]),
    __metadata("design:returntype", Promise)
], UtilisateurController.prototype, "update", null);
exports.UtilisateurController = UtilisateurController = __decorate([
    (0, common_1.Controller)('utilisateur'),
    (0, swagger_1.ApiTags)('Utilisateurs'),
    __metadata("design:paramtypes", [utilisateur_service_1.UtilisateurService])
], UtilisateurController);
//# sourceMappingURL=utilisateur.controller.js.map