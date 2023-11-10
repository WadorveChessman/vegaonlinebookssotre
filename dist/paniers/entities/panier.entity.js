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
exports.Panier = void 0;
const commande_entity_1 = require("../../commande/entities/commande.entity");
const livre_panier_entity_1 = require("../../livre-panier/entities/livre-panier.entity");
const utilisateur_entity_1 = require("../../utilisateur/entities/utilisateur.entity");
const typeorm_1 = require("typeorm");
let Panier = class Panier {
};
exports.Panier = Panier;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Panier.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Panier.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => utilisateur_entity_1.Utilisateur, (user) => user.panier),
    __metadata("design:type", utilisateur_entity_1.Utilisateur)
], Panier.prototype, "utilisateur", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => commande_entity_1.Commande, (commande) => commande.panier),
    __metadata("design:type", Array)
], Panier.prototype, "commandes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => livre_panier_entity_1.LivrePanier, (livrePanier) => livrePanier.panier),
    __metadata("design:type", Array)
], Panier.prototype, "livrePanier", void 0);
exports.Panier = Panier = __decorate([
    (0, typeorm_1.Entity)()
], Panier);
//# sourceMappingURL=panier.entity.js.map