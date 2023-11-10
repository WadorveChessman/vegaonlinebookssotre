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
exports.PaniersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const panier_entity_1 = require("./entities/panier.entity");
const typeorm_2 = require("typeorm");
const utilisateur_service_1 = require("../utilisateur/utilisateur.service");
let PaniersService = class PaniersService {
    constructor(panierRepository, utilisateurService) {
        this.panierRepository = panierRepository;
        this.utilisateurService = utilisateurService;
    }
    async create(createPanierDto) {
        const utilisateur = await this.utilisateurService.findOne(createPanierDto.utilisateurId);
        if (!utilisateur) {
            throw new common_1.NotFoundException(`Utilisateur with ID ${createPanierDto.utilisateurId} not found`);
        }
        const nouveauPanier = new panier_entity_1.Panier();
        nouveauPanier.date = new Date();
        nouveauPanier.utilisateur = utilisateur;
        return this.panierRepository.save(nouveauPanier);
    }
    findAll() {
        return this.panierRepository.find();
    }
    async findOne(id) {
        const panier = await this.panierRepository.findOne({ where: { id } });
        if (!panier) {
            throw new common_1.NotFoundException(`Panier with ID ${id} not found`);
        }
        return panier;
    }
    async update(id, updatePanierDto) {
        const panier = await this.panierRepository.findOne({ where: { id } });
        if (!panier) {
            throw new common_1.NotFoundException(`Panier with ID ${id} not found`);
        }
        if (updatePanierDto.date) {
            panier.date = updatePanierDto.date;
        }
        return this.panierRepository.save(panier);
    }
    async remove(id) {
        const panier = await this.panierRepository.findOne({ where: { id } });
        if (!panier) {
            throw new common_1.NotFoundException(`Panier with ID ${id} not found`);
        }
        await this.panierRepository.remove(panier);
    }
};
exports.PaniersService = PaniersService;
exports.PaniersService = PaniersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(panier_entity_1.Panier)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        utilisateur_service_1.UtilisateurService])
], PaniersService);
//# sourceMappingURL=paniers.service.js.map