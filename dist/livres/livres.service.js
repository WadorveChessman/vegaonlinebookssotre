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
exports.LivresService = void 0;
const common_1 = require("@nestjs/common");
const livre_entity_1 = require("./entities/livre.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let LivresService = class LivresService {
    constructor(livreRepository) {
        this.livreRepository = livreRepository;
    }
    async findAll() {
        return await this.livreRepository.find();
    }
    async findOne(id) {
        const livre = await this.livreRepository.findOne({ where: { id } });
        if (!livre) {
            throw new common_1.NotFoundException(`Livre with ID ${id} not found`);
        }
        return livre;
    }
    create(createLivreDto) {
        const nouveauLivre = new livre_entity_1.Livre();
        nouveauLivre.titre = createLivreDto.titre;
        nouveauLivre.description = createLivreDto.description;
        nouveauLivre.anneePublucation = createLivreDto.anneePublication;
        nouveauLivre.prix = createLivreDto.prix;
        nouveauLivre.qte = createLivreDto.qte;
        nouveauLivre.auteur = createLivreDto.auteur;
        nouveauLivre.categorie = createLivreDto.categorie;
        return this.livreRepository.save(nouveauLivre);
    }
    async update(id, updateLivreDto) {
        const livre = await this.livreRepository.findOne({ where: { id } });
        if (!livre) {
            throw new common_1.NotFoundException(`Livre with ID ${id} not found`);
        }
        if (updateLivreDto.titre !== undefined) {
            livre.titre = updateLivreDto.titre;
        }
        if (updateLivreDto.description !== undefined) {
            livre.description = updateLivreDto.description;
        }
        if (updateLivreDto.anneePublication !== undefined) {
            livre.anneePublucation = updateLivreDto.anneePublication;
        }
        if (updateLivreDto.prix !== undefined) {
            livre.prix = updateLivreDto.prix;
        }
        if (updateLivreDto.qte !== undefined) {
            livre.qte = updateLivreDto.qte;
        }
        if (updateLivreDto.auteur !== undefined) {
            livre.auteur = updateLivreDto.auteur;
        }
        if (updateLivreDto.categorie !== undefined) {
            livre.categorie = updateLivreDto.categorie;
        }
        await this.livreRepository.save(livre);
        return livre;
    }
    async remove(id) {
        const livre = await this.livreRepository.findOne({ where: { id } });
        if (!livre) {
            throw new common_1.NotFoundException(`Livre with ID ${id} not found`);
        }
        await this.livreRepository.remove(livre);
        return livre;
    }
};
exports.LivresService = LivresService;
exports.LivresService = LivresService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(livre_entity_1.Livre)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LivresService);
//# sourceMappingURL=livres.service.js.map