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
exports.Livre = void 0;
const livre_commande_entity_1 = require("../../livre-commande/entities/livre-commande.entity");
const livre_panier_entity_1 = require("../../livre-panier/entities/livre-panier.entity");
const typeorm_1 = require("typeorm");
let Livre = class Livre {
};
exports.Livre = Livre;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Livre.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Livre.prototype, "titre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Livre.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Livre.prototype, "anneePublucation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Livre.prototype, "prix", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Livre.prototype, "qte", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Livre.prototype, "auteur", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Livre.prototype, "categorie", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => livre_commande_entity_1.LivreCommande, (commande) => commande.livre),
    __metadata("design:type", Array)
], Livre.prototype, "commandes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => livre_panier_entity_1.LivrePanier, (livre) => livre.livre),
    __metadata("design:type", Array)
], Livre.prototype, "livrePanier", void 0);
exports.Livre = Livre = __decorate([
    (0, typeorm_1.Entity)()
], Livre);
//# sourceMappingURL=livre.entity.js.map