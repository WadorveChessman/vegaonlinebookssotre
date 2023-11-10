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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const livres_module_1 = require("./livres/livres.module");
const utilisateur_module_1 = require("./utilisateur/utilisateur.module");
const paniers_module_1 = require("./paniers/paniers.module");
const livre_panier_module_1 = require("./livre-panier/livre-panier.module");
const commande_module_1 = require("./commande/commande.module");
const livre_commande_module_1 = require("./livre-commande/livre-commande.module");
const jwt_1 = require("@nestjs/jwt");
const utilisateur_service_1 = require("./utilisateur/utilisateur.service");
const user_roles_enum_1 = require("./utility/common/user-roles.enum");
let AppModule = class AppModule {
    constructor(utilisateurService) {
        this.utilisateurService = utilisateurService;
    }
    async onModuleInit() {
        try {
            const utilisateur = await this.utilisateurService.createDefaultUser();
            utilisateur.roles = [user_roles_enum_1.UserRole.Admin];
            await this.utilisateurService.update(utilisateur.id, utilisateur);
            await this.utilisateurService.updateUserRoles(utilisateur.id, [
                user_roles_enum_1.UserRole.Admin,
            ]);
            return { message: 'Utilisateur administrateur créé avec succès' };
        }
        catch (error) {
            return {
                message: "Une erreur s'est produite lors de la création de l'utilisateur administrateur",
                error,
            };
        }
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.MYSQL_ADDON_HOST,
                port: parseInt(process.env.MYSQL_ADDON_PORT, 10),
                username: process.env.MYSQL_ADDON_USER,
                password: process.env.MYSQL_ADDON_PASSWORD,
                database: process.env.MYSQL_ADDON_DB,
                url: 'mysql://uyg1nu5pnhpbne0l:eUsYQqEmOOuXATXAlTzV@bxw5otlshrpdbuhj2kla-mysql.services.clever-cloud.com:3306/bxw5otlshrpdbuhj2kla',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
                autoLoadEntities: true,
            }),
            jwt_1.JwtModule.register({
                secret: 'your-secret-key',
                signOptions: { expiresIn: '1h' },
            }),
            livres_module_1.LivresModule,
            utilisateur_module_1.UtilisateurModule,
            paniers_module_1.PaniersModule,
            livre_panier_module_1.LivrePanierModule,
            commande_module_1.CommandeModule,
            livre_commande_module_1.LivreCommandeModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    }),
    __metadata("design:paramtypes", [utilisateur_service_1.UtilisateurService])
], AppModule);
//# sourceMappingURL=app.module.js.map