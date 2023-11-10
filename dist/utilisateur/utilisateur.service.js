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
exports.UtilisateurService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const typeorm_1 = require("@nestjs/typeorm");
const utilisateur_entity_1 = require("./entities/utilisateur.entity");
const typeorm_2 = require("typeorm");
const class_validator_1 = require("class-validator");
const config_1 = require("../config/config");
const config1_1 = require("../config/config1");
const jwt = require("jsonwebtoken");
let UtilisateurService = class UtilisateurService {
    constructor(utilisateurRepository) {
        this.utilisateurRepository = utilisateurRepository;
    }
    async findOneByEmail(email) {
        const user = await this.utilisateurRepository.findOne({ where: { email } });
        if (!user) {
            throw new common_1.NotFoundException(`User with email ${email} not found`);
        }
        return user;
    }
    async create(createUtilisateurDto) {
        const errors = await (0, class_validator_1.validate)(createUtilisateurDto);
        if (errors.length > 0) {
            throw new common_1.BadRequestException('Validation failed');
        }
        const existingUser = await this.utilisateurRepository.findOne({
            where: { email: createUtilisateurDto.email },
        });
        if (existingUser) {
            throw new common_1.BadRequestException('Cet email est déjà utilisé par un autre utilisateur');
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(createUtilisateurDto.password, salt);
        const newUtilisateur = new utilisateur_entity_1.Utilisateur();
        newUtilisateur.nom = createUtilisateurDto.nom;
        newUtilisateur.prenom = createUtilisateurDto.prenom;
        newUtilisateur.email = createUtilisateurDto.email;
        newUtilisateur.password = hashedPassword;
        newUtilisateur.photo = createUtilisateurDto.photo;
        newUtilisateur.commandes = [];
        newUtilisateur.panier = [];
        return this.utilisateurRepository.save(newUtilisateur);
    }
    async findAll() {
        const utilisateur = await this.utilisateurRepository.find();
        return utilisateur;
    }
    async findOne(id) {
        const utilisateur = await this.utilisateurRepository.findOne({
            where: { id },
        });
        if (!utilisateur) {
            throw new common_1.NotFoundException(`Utilisateur with ID ${id} not found`);
        }
        return utilisateur;
    }
    async update(id, updateUtilisateurDto) {
        const utilisateur = await this.utilisateurRepository.findOne({
            where: { id },
        });
        if (!utilisateur) {
            throw new common_1.NotFoundException(`Utilisateur with ID ${id} not found`);
        }
        if (updateUtilisateurDto.nom !== undefined) {
            utilisateur.nom = updateUtilisateurDto.nom;
        }
        if (updateUtilisateurDto.prenom !== undefined) {
            utilisateur.prenom = updateUtilisateurDto.prenom;
        }
        if (updateUtilisateurDto.email !== undefined) {
            utilisateur.email = updateUtilisateurDto.email;
        }
        if (updateUtilisateurDto.photo !== undefined) {
            utilisateur.photo = updateUtilisateurDto.photo;
        }
        if (updateUtilisateurDto.password !== undefined) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(updateUtilisateurDto.password, salt);
            utilisateur.password = hashedPassword;
        }
        return this.utilisateurRepository.save(utilisateur);
    }
    async remove(id) {
        const utilisateur = await this.utilisateurRepository.findOne({
            where: { id },
        });
        if (!utilisateur) {
            throw new common_1.NotFoundException(`Utilisateur with ID ${id} not found`);
        }
        return this.utilisateurRepository.remove(utilisateur);
    }
    async signin(signInUserDto) {
        const userExists = await this.utilisateurRepository
            .createQueryBuilder('utilisateur')
            .addSelect('utilisateur.password')
            .where('utilisateur.email = :email', { email: signInUserDto.email })
            .getOne();
        if (!userExists)
            throw new common_1.BadRequestException('Invalid email');
        const passwordIsValid = await bcrypt.compare(signInUserDto.password, userExists.password);
        if (!passwordIsValid)
            throw new common_1.BadRequestException('Invalid Password');
        delete userExists.password;
        return userExists;
    }
    async token_access(user) {
        const payload = { email: user.email, sub: user.id };
        const token = jwt.sign(payload, config1_1.default.jwtSecret);
        return token;
    }
    async createDefaultUser() {
        const existingUser = await this.utilisateurRepository.findOne({
            where: { email: config_1.defaultUserConfig.email },
        });
        if (existingUser) {
            return existingUser;
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(config_1.defaultUserConfig.password, salt);
        const newUser = new utilisateur_entity_1.Utilisateur();
        newUser.nom = config_1.defaultUserConfig.nom;
        newUser.prenom = config_1.defaultUserConfig.prenom;
        newUser.email = config_1.defaultUserConfig.email;
        newUser.password = hashedPassword;
        return this.utilisateurRepository.save(newUser);
    }
    async updateUserRoles(id, roles) {
        const utilisateur = await this.utilisateurRepository.findOne({
            where: { id },
        });
        if (!utilisateur) {
            throw new common_1.NotFoundException(`Utilisateur avec l'ID ${id} non trouvé.`);
        }
        utilisateur.roles = roles;
        return this.utilisateurRepository.save(utilisateur);
    }
};
exports.UtilisateurService = UtilisateurService;
exports.UtilisateurService = UtilisateurService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(utilisateur_entity_1.Utilisateur)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UtilisateurService);
//# sourceMappingURL=utilisateur.service.js.map