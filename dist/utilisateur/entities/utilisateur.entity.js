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
exports.Utilisateur = void 0;
const commande_entity_1 = require("../../commande/entities/commande.entity");
const livre_panier_entity_1 = require("../../livre-panier/entities/livre-panier.entity");
const panier_entity_1 = require("../../paniers/entities/panier.entity");
const user_roles_enum_1 = require("../../utility/common/user-roles.enum");
const typeorm_1 = require("typeorm");
let Utilisateur = class Utilisateur {
};
exports.Utilisateur = Utilisateur;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Utilisateur.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Utilisateur.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Utilisateur.prototype, "prenom", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Utilisateur.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Utilisateur.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Utilisateur.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: user_roles_enum_1.UserRole, default: [user_roles_enum_1.UserRole.Client] }),
    __metadata("design:type", Array)
], Utilisateur.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => commande_entity_1.Commande, (commande) => commande.utilisateur),
    __metadata("design:type", Array)
], Utilisateur.prototype, "commandes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => panier_entity_1.Panier, (panier) => panier.utilisateur),
    __metadata("design:type", Array)
], Utilisateur.prototype, "panier", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => livre_panier_entity_1.LivrePanier, (livrePanier) => livrePanier.utilisateur),
    __metadata("design:type", Array)
], Utilisateur.prototype, "livrePanier", void 0);
exports.Utilisateur = Utilisateur = __decorate([
    (0, typeorm_1.Entity)()
], Utilisateur);
//# sourceMappingURL=utilisateur.entity.js.map